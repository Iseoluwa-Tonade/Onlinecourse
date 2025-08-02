# Course Recommender

This is a web application that provides a platform for online courses, similar to Coursera, but with a Netflix-style recommendation system to help users discover new courses. This project is intended to be deployed in Nigeria.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.8+
- Node.js and npm

### Backend Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/course-recommender.git
    cd course-recommender
    ```

2.  **Create and activate a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install backend dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Apply database migrations:**
    ```bash
    python manage.py migrate
    ```

5.  **Run the backend development server:**
    ```bash
    python manage.py runserver
    ```
    The backend will be running at `http://127.0.0.1:8000/`.

### Frontend Setup

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

3.  **Run the frontend development server:**
    ```bash
    npm start
    ```
    The frontend will be running at `http://localhost:3000/`.

## Tech Stack

*   **Backend:**
    *   [Django](https://www.djangoproject.com/) - High-level Python Web framework.
    *   [Django REST Framework](https://www.django-rest-framework.org/) - Powerful and flexible toolkit for building Web APIs.

*   **Frontend:**
    *   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
    *   [Create React App](https://create-react-app.dev/) - A comfortable environment for learning React.

*   **Database:**
    *   [SQLite](https://www.sqlite.org/index.html) - (for development)
