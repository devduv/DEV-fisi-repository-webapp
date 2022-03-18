export interface FileRepository {
  id?: string;
  name?: string;
  description?: string;
  type?: string;
  url?: string;
  coursePlan: {
    id?: string,
    credit?:number,
    cycle?: string
  }
}
/*
  id?: string;
  name?: string;
  course?: string;
  teacher?: string;
  semester?: string;
  file_type?: string;
  file_extension?: string;
  */