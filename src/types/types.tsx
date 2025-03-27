// /app/types/types.ts

export interface Project {
  title: string;
  description: string;
  end_date: Date | null;
  link: string;    
  pageLink: string;   
  tags: string[];
  content: string; 
}

export interface ProfExperience {
  company: string;
  role: string;
  startDate: Date;
  endDate?: Date | null;
  pageLink: string;
}

export interface Extracurricular {
  name: string;
  role: string;
  startDate: Date;
  endDate?: Date | null;
  description?: string;
}
