export interface Task {
  id: number;
  project_id: number;
  content: string;
  completed: boolean;
  label_ids: any[];
  order: number;
  indent: number;
  priority: number;
  comment_count: number;
  url: string;
}
