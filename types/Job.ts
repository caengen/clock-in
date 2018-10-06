export interface Job {
  name: string;
  description: string;
  hourlyRate: number;
  currentTimeEntry: TimeEntry;
  history: TimeEntry[];
}

export interface TimeEntry {
  duration: Duration;
  breakes: Duration[];
}

export interface Duration {
  start: Date;
  end?: Date;
}
