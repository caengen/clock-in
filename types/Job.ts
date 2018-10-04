export interface Job {
  name: string;
  description: string;
  hourlyRate: number;
  timeEntries: TimeEntry[];
}

export interface TimeEntry {
  duration: Duration;
  breakes: Duration[];
}

export interface Duration {
  start: Date;
  end: Date;
}
