# interactive_logger.py

with open('python_session.log', 'a') as logfile:
    while True:
        try:
            # Read input command
            command = input(">>> ")
            if command.strip() == "exit()":
                break

            # Evaluate the command
            result = eval(command)

            # Check if the command is an expression or assignment
            if not command.strip().endswith('='):
                # Save input command and output to the log file
                logfile.write(f"In: {command}\nOut: {result}\n\n")
        except Exception as e:
            # Handle exceptions
            print(f"Error: {e}")
