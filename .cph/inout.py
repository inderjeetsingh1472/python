# interactive_logger.py

import sys

with open('python_session.log', 'a') as logfile:
    while True:
        try:
            # Read input command
            command = input(">>> ")
            if command.strip() == "exit()":
                break

            # Check if the command is an import statement
            if command.strip().startswith("import") or command.strip().startswith("from"):
                exec(command)
                continue

            # Evaluate the command
            result = eval(command)

            # Print the result immediately
            print(result)

            # Save input command and output to the log file
            logfile.write(f"In: {command}\nOut: {result}\n\n")
        except Exception as e:
            # Handle exceptions
            print(f"Error: {e}")
