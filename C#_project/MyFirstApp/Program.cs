// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World! This is my to do list!");
            
            // create a new empty list of strings
            List<string> tasks = new List<string>();

            while (true)
            {
              Console.WriteLine("\n---TO-DO-LIST---");
              Console.WriteLine("1. Add Task");
              Console.WriteLine("2. View Tasks");
              Console.WriteLine("3. Remove Tasks");
              Console.WriteLine("4. Exit");

              string choice = Console.ReadLine();

              if (choice == "1")
                {
                    Console.WriteLine("Enter a task: ");
                    string task = Console.ReadLine();

                    tasks.Add(task);
                    Console.Write("Task Added!");
                }
                else if (choice == "2")
                {
                    Console.Write("\nYour tasks: ");

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



