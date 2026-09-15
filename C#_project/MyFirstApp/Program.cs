// See https://aka.ms/new-console-template for more information
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World! This is my to do list!");
            
            // create a new empty list of strings
            List<string> tasks = new List<string>();

            while (true)
            {
              Console.WriteLine("\nType the number of the option you want to choose");
              Console.WriteLine("\n---TO-DO-LIST---");
              Console.WriteLine("1. Add Task");
              Console.WriteLine("2. View Tasks");
              Console.WriteLine("3. Remove Tasks");
              Console.WriteLine("4. Exit");

              string choice = Console.ReadLine();

              if (choice == "1")
                {
                    // Declare variables for dateTime, priority, and status
                    string dateTime = string.Empty;
                    string priority = string.Empty;
                    string status = string.Empty;

                    Console.WriteLine("Enter a task: ");
                    string task = Console.ReadLine();
                    // constraints for the task, date and time, priority, and status if they do not meet requirements the task is deleted.
                    if (string.IsNullOrWhiteSpace(task))
                    {
                        Console.WriteLine("Task, date and time, priority, and status cannot be empty.");
                        tasks.Remove($"{task} [Priority: {priority}] [{dateTime}] [Status: {status}]");
                        break;
                    } else {
                    Console.Write("Task Added!\n");
                    }
                    // add date and time to the task
                    Console.WriteLine("Enter the date and time for the task (MM/dd/yyyy HH:mm:ss): ");
                    dateTime = Console.ReadLine();
                    if (DateTime.Now > DateTime.Parse(dateTime))
                    {
                    Console.WriteLine("Date and time must be in the future.");
                    tasks.Remove($"{task} [Priority: {priority}] [{dateTime}] [Status: {status}]");
                    break;
                    } else {
                    Console.Write("Date and Time Added!\n");
                    }
                    // add priority to the task
                    Console.WriteLine("Enter the priority for the task (1-5): ");
                    priority = Console.ReadLine();
                    if (priority != "1" && priority != "2" && priority != "3" && priority != "4" && priority != "5")
                    {
                        Console.WriteLine("Priority must be a number between 1 and 5.");
                        tasks.Remove($"{task} [Priority: {priority}] [{dateTime}] [Status: {status}]");
                        break;
                    } else {
                    Console.Write("Priority Added!\n");
                    }
                    // add status to the task
                    Console.WriteLine("Enter the status for the task (To Do, In Progress, Done): ");
                    status = Console.ReadLine();
                    tasks.Add($"{task} [Priority: {priority}] [{dateTime}] [Status: {status}]");
                    
                    if (status != "To Do" && status != "In Progress" && status != "Done")
                    {
                        Console.WriteLine("Status must be 'To Do', 'In Progress', or 'Done'.");
                        tasks.Remove($"{task} [Priority: {priority}] [{dateTime}] [Status: {status}]");
                        break;
                    } else {
                    Console.Write("Status Added!\n");
                    }
                }
                else if (choice == "2")
                {
                    Console.Write("\nYour tasks: \n");

                    if (tasks.Count == 0)
                    {
                       Console.Write("No tasks yet."); 
                    }
                    else
                    {
                        // write all tasks in the list
                        for( int i = 0; i < tasks.Count; i++)
                        {
                            Console.WriteLine($"{i + 1}. {tasks[i]}");
                        }
                    }
                }
                else if (choice == "3")
                {
                    Console.Write("Enter the task to remove: ");
                    int taskNumber = Convert.ToInt32(Console.ReadLine());
                    // If task is greater then 0 and there is is a task in the to do list
                    if (taskNumber > 0 && taskNumber <= tasks.Count)
                    {
                        // first position is always 0
                        tasks.RemoveAt(taskNumber - 1);
                        Console.WriteLine("Task Removed!");
                    }
                    else
                    {
                        Console.WriteLine("Invalid task number");
                    }
                }
                else if (choice == "4")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid option");
                }
            }
        }
    }



