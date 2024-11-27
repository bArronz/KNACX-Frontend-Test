import React, { useEffect } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import { createViewDay } from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import "@schedule-x/theme-default/dist/index.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";


const TimeTable = ({ selectedDoctor }) => {
  const eventModal = createEventModalPlugin();
  const plugins = [createEventsServicePlugin(), eventModal, ]
 
  const calendar = useCalendarApp({
    views: [createViewDay()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        description: 'Dental care',
        start: '2024-11-27 09:00',
        end: '2024-11-27 10:30',
        calendarId: '0001',
        people: ['patient 001'],
      },
      {
        id: '2',
        title: 'Event 2',
        description: 'Dental care',
        start: '2024-11-27 12:00',
        end: '2024-11-27 13:30',
        calendarId: '0002',
        people: ['patient 002']
      },
      {
        id: '3',
        title: 'Event 3',
        description: 'Dental care',
        start: '2024-11-27 15:30',
        end: '2024-11-27 17:00',
        calendarId: '0001',
        people: ['patient 003']
      },
      {
        id: '4',
        title: 'Event 4',
        description: 'Dental care',
        start: '2024-11-28 09:00',
        end: '2024-11-28 10:30',
        calendarId: '0002',
        people: ['patient 004'],
      },
      {
        id: '5',
        title: 'Event 5',
        description: 'Dental care',
        start: '2024-11-28 12:00',
        end: '2024-11-28 13:30',
        calendarId: '0002',
        people: ['patient 005']
      },
      {
        id: '6',
        title: 'Event 6',
        description: 'Dental care',
        start: '2024-11-28 15:30',
        end: '2024-11-28 17:00',
        calendarId: '0001',
        people: ['patient 006']
      },
    ],
  }, plugins)

  useEffect(() => {
    calendar.eventsService.getAll();
  }, []);

  const data = (calendar.events.getAll())
  const datafilter = data.filter((item) => item.calendarId === selectedDoctor)
  console.log(datafilter)

  return (
    <div className="flex justify-center">
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
};

export default TimeTable;
