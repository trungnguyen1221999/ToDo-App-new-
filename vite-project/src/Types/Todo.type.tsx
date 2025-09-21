export interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

export interface PopupRemove {
  open: boolean;
  setOpen: (open: boolean) => void;
  setTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  id: string;
  setId: React.Dispatch<React.SetStateAction<string>>;
}
