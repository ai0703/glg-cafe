'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X, Calendar as CalendarIcon } from 'lucide-react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    startOfWeek,
    endOfWeek
} from 'date-fns';

type CalendarEvent = {
    id: string;
    date: string; // ISO string
    title: string;
    type: 'training' | 'meeting' | 'deadline' | 'other';
};

const EVENT_COLORS = {
    training: 'bg-blue-500',
    meeting: 'bg-green-500',
    deadline: 'bg-red-500',
    other: 'bg-[var(--color-champagne)]'
};

export default function CompanyCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [isAddingEvent, setIsAddingEvent] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventType, setNewEventType] = useState<CalendarEvent['type']>('meeting');

    // Load events from local storage on mount
    useEffect(() => {
        const storedEvents = localStorage.getItem('glg_calendar_events');
        if (storedEvents) {
            setEvents(JSON.parse(storedEvents));
        } else {
            // Seed some dummy events if empty
            const seedEvents: CalendarEvent[] = [
                { id: '1', date: new Date().toISOString(), title: 'Team Standup', type: 'meeting' },
                { id: '2', date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString(), title: 'Sales Training', type: 'training' },
            ];
            setEvents(seedEvents);
            localStorage.setItem('glg_calendar_events', JSON.stringify(seedEvents));
        }
    }, []);

    // Save to local storage whenever events change
    useEffect(() => {
        if (events.length > 0) {
            localStorage.setItem('glg_calendar_events', JSON.stringify(events));
        }
    }, [events]);

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

    const handleDayClick = (day: Date) => {
        setSelectedDate(day);
        setIsAddingEvent(true);
    };

    const handleAddEvent = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedDate || !newEventTitle.trim()) return;

        const newEvent: CalendarEvent = {
            id: Date.now().toString(),
            date: selectedDate.toISOString(),
            title: newEventTitle,
            type: newEventType
        };

        setEvents([...events, newEvent]);
        setNewEventTitle('');
        setIsAddingEvent(false);
        setSelectedDate(null);
    };

    const handleDeleteEvent = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        setEvents(events.filter(ev => ev.id !== id));
    };

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(currentDate);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const days = eachDayOfInterval({ start: startDate, end: endDate });

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get Upcoming Events (next 5)
    const upcomingEvents = events
        .filter(e => new Date(e.date) >= new Date(new Date().setHours(0, 0, 0, 0)))
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .slice(0, 4);

    return (
        <div className="rounded-2xl overflow-hidden h-full flex flex-col border border-[var(--color-border-subtle)] bg-[var(--color-obsidian)] shadow-inner relative">

            {/* Header */}
            <div className="bg-[var(--color-slate)] px-6 py-4 border-b border-[var(--color-border-subtle)] flex items-center justify-between z-10 shrink-0">
                <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-ivory)] flex items-center gap-2">
                    <CalendarIcon size={16} className="text-[var(--color-champagne)]" />
                    Internal Calendar
                </span>

                <div className="flex items-center gap-4">
                    <button onClick={prevMonth} className="text-[var(--color-ivory)] hover:text-[var(--color-champagne)] transition-colors p-1">
                        <ChevronLeft size={20} />
                    </button>
                    <span className="font-sans font-semibold text-[var(--color-ivory)] min-w-[120px] text-center">
                        {format(currentDate, 'MMMM yyyy')}
                    </span>
                    <button onClick={nextMonth} className="text-[var(--color-ivory)] hover:text-[var(--color-champagne)] transition-colors p-1">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            {/* Main Calendar Body */}
            <div className="flex-1 flex flex-col bg-[#111111] overflow-hidden min-h-[400px]">
                {/* Weekday headers */}
                <div className="grid grid-cols-7 border-b border-[var(--color-border-subtle)] shrink-0 bg-[var(--color-obsidian)]">
                    {weekDays.map(day => (
                        <div key={day} className="py-2 text-center text-[10px] font-semibold tracking-wider text-[var(--color-ivory)]/50 uppercase">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 flex-1 auto-rows-fr">
                    {days.map((day, idx) => {
                        const dayEvents = events.filter(e => isSameDay(new Date(e.date), day));
                        const isCurrentMonth = isSameMonth(day, monthStart);
                        const isToday = isSameDay(day, new Date());

                        return (
                            <div
                                key={idx}
                                onClick={() => handleDayClick(day)}
                                className={`
                                    border-b border-r border-[#222222] p-1 md:p-2 cursor-pointer transition-colors hover:bg-[var(--color-slate)]
                                    ${!isCurrentMonth ? 'opacity-30' : ''}
                                    ${idx % 7 === 6 ? 'border-r-0' : ''}
                                `}
                            >
                                <div className="flex justify-between items-start">
                                    <span className={`text-xs font-sans w-6 h-6 flex items-center justify-center rounded-full
                                        ${isToday ? 'bg-[var(--color-champagne)] text-[var(--color-obsidian)] font-bold' : 'text-[var(--color-ivory)]/70'}
                                    `}>
                                        {format(day, dateFormat)}
                                    </span>
                                </div>

                                <div className="mt-1 space-y-1 max-h-[60px] md:max-h-full overflow-y-auto no-scrollbar">
                                    {dayEvents.map(ev => (
                                        <div
                                            key={ev.id}
                                            className="group flex justify-between items-center text-[9px] md:text-[10px] leading-tight px-1.5 py-1 rounded-sm bg-[#222] text-[var(--color-ivory)] border-l-2"
                                            style={{ borderLeftColor: ev.type === 'training' ? '#3b82f6' : ev.type === 'meeting' ? '#22c55e' : ev.type === 'deadline' ? '#ef4444' : '#C9A84C' }}
                                        >
                                            <span className="truncate">{ev.title}</span>
                                            <button
                                                onClick={(e) => handleDeleteEvent(e, ev.id)}
                                                className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 ml-1 shrink-0"
                                            >
                                                <X size={10} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Upcoming events footer */}
            <div className="bg-[var(--color-slate)] px-6 py-4 border-t border-[var(--color-border-subtle)] z-10 shrink-0">
                <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-ivory)]/70 mb-3">
                    Upcoming Events
                </p>
                <div className="flex flex-wrap gap-2 md:gap-4">
                    {upcomingEvents.length > 0 ? upcomingEvents.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 text-sm bg-[var(--color-obsidian)] px-3 py-1.5 rounded-lg border border-[var(--color-border-subtle)]">
                            <span className={`w-2 h-2 rounded-full ${EVENT_COLORS[item.type]} flex-shrink-0 animate-pulse`} />
                            <span className="text-[var(--color-ivory)]/60 font-sans text-xs">{format(new Date(item.date), 'MMM d')}</span>
                            <span className="text-[var(--color-ivory)] font-sans text-xs font-semibold truncate max-w-[120px]">{item.title}</span>
                        </div>
                    )) : (
                        <span className="text-xs text-[var(--color-ivory)]/50 font-sans italic">No upcoming events scheduled.</span>
                    )}
                </div>
            </div>

            {/* Add Event Modal Overlay */}
            {isAddingEvent && selectedDate && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] rounded-xl w-full max-w-sm shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="bg-[var(--color-slate)] px-4 py-3 border-b border-[var(--color-border-subtle)] flex justify-between items-center">
                            <h3 className="font-sans font-semibold text-[var(--color-ivory)]">Add Event</h3>
                            <button onClick={() => setIsAddingEvent(false)} className="text-[var(--color-ivory)]/70 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>
                        <form onSubmit={handleAddEvent} className="p-4 space-y-4">
                            <div>
                                <p className="text-xs text-[var(--color-ivory)]/60 mb-1">Date</p>
                                <p className="font-sans text-sm text-[var(--color-ivory)] font-medium bg-[#111] p-2 rounded border border-[var(--color-border-subtle)]">
                                    {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                                </p>
                            </div>

                            <div>
                                <label className="block text-xs text-[var(--color-ivory)]/60 mb-1">Event Title</label>
                                <input
                                    type="text"
                                    autoFocus
                                    value={newEventTitle}
                                    onChange={(e) => setNewEventTitle(e.target.value)}
                                    className="w-full bg-[#111] border border-[var(--color-border-subtle)] text-[var(--color-ivory)] p-2 rounded font-sans text-sm focus:outline-none focus:border-[var(--color-champagne)]"
                                    placeholder="e.g. Weekly Pipeline Review"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs text-[var(--color-ivory)]/60 mb-1">Event Type</label>
                                <select
                                    value={newEventType}
                                    onChange={(e) => setNewEventType(e.target.value as CalendarEvent['type'])}
                                    className="w-full bg-[#111] border border-[var(--color-border-subtle)] text-[var(--color-ivory)] p-2 rounded font-sans text-sm focus:outline-none focus:border-[var(--color-champagne)]"
                                >
                                    <option value="meeting">Meeting</option>
                                    <option value="training">Training</option>
                                    <option value="deadline">Deadline</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--color-champagne)] hover:bg-white text-[var(--color-obsidian)] font-bold uppercase tracking-wider text-xs py-3 rounded transition-colors mt-2"
                            >
                                Save Event
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
