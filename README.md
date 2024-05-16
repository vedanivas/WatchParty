# Watch Party Application

## Introduction
Our project focuses on developing a YouTube Watch Party application using sockets for real-time communication and React for building the web interface. The primary goal is to enable users to watch videos together remotely while simultaneously chatting with each other.

## Specifications

### 1. Separate Rooms for Watch Parties
The website allows users to create and join separate rooms for different watch parties. Each room provides a dedicated space for users to watch videos together and interact via chat.

### 2. Automatic Video Pause
When a user pauses the video in their browser, the video automatically pauses for all users in the room, including the host. This ensures synchronized playback and enhances the viewing experience.

### 3. Automatic Synchronization
When a user seeks or skips to a specific timestamp in the video, all users in the room, including the host, are automatically synchronized to that timestamp. This feature ensures that all users are viewing the same portion of the video simultaneously.

### 4. Host-Controlled Video Queue
Only the host of the room has the authority to add URLs to play YouTube videos and create a queue of multiple videos. Once the previous video ends, the next video in the queue starts playing automatically, ensuring uninterrupted viewing.

### 5. Synchronized Viewing
All users in the room view the same video at the same timestamp, ensuring a synchronized viewing experience. This feature enhances the sense of community and shared experience among users.

### 6. Chat Functionality and User Options
The website includes a chat functionality that allows users to communicate in real-time while watching the video. Users also have the option to leave the room when they are done participating in the watch party.

### 7. Backend Implementation
Currently, the website does not have a database. As a result, when the window is reloaded, users remain in the room but lose the chat history and the video queue. Implementing a backend with a database would address this limitation and provide a more seamless user experience.

## Tech Stack
- **Frontend:** React.js
- **Communication:** Sockets (WebSocket protocol)
- **Backend:** Node.js

## Conclusion
The incorporation of features such as separate rooms, automatic synchronization, host-controlled video queue, and chat functionality enhances the overall user experience. Moving forward, implementing a backend with a database would further improve the website's functionality and reliability, ensuring a seamless and enjoyable experience for all users.
