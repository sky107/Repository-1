// SAM allows you to ship the product faster by configuring yml files and automatically allocate the resources




install sam-cli


sam init -r nodejs14.x



You can use the SAM CLI to generate sample event data for testing your Lambda functions locally. The syntax is easy and straightforward.

$ sam local generate-event <service> <event>

For example, to generate a sample event data for S3 Put event, you could run

$ sam local generate-event s3 put

This will display the event data in the terminal. If you wanted to write this event data to a file, say event.json, you could run

$ sam local generate-event s3 put > event.json

To get more help on this command, simply run

$ sam local generate-event --help

or to get help with a specific event or service you could run the command with --help flag.

The following command will return help on generating event data with S3 service

$ sam local generate-event s3 --help

while the command below will return help on generated event data with S3 Put command.

$ sam local generate-event s3 put --help