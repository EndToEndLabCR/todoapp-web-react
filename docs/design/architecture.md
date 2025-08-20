# 🏗 Architecture Overview

## Frontend

- **React App**: Connects to the FastAPI backend via REST APIs.
- **Ant Design**: Provides UI elements like forms, tables, and modals.

## Backend

- **FastAPI**: Handles user authentication (JWT/OAuth2), project, and task management endpoints.
- **Celery**: Sends task due reminders and notifications.

## Database

- **PostgreSQL**: Stores user, project, and task data.
- **SQLAlchemy**: Defines models and performs database queries.

---

## 🧭 Architectural Principles

### 1. **Hexagonal Architecture (Ports and Adapters)**

Hexagonal Architecture separates the core business logic from external systems (e.g., databases, APIs, UI). This ensures that the core remains independent of frameworks, making it easier to test and extend.

- **Core Domain**: The heart of the application containing business rules and logic.
- **Ports**: Interfaces that define how the core interacts with external systems.
- **Adapters**: Implementations of ports to connect the core to systems like databases, APIs, and user interfaces.

### 2. **Vertical Slicing**

Vertical slicing structures the codebase by features rather than technical layers. Each slice includes everything needed to implement a feature (e.g., routes, services, models). This approach facilitates independent development and deployment of features.

### 3. **Screaming Architecture**

The project structure reflects the application's business domain rather than technical concerns. For example:

- Use `tasks` instead of generic folders like `models` or `services`.
- Focus on the functionality provided by the app (e.g., task management, user authentication).

---

## 🌟 Benefits of This Approach

1. **Scalability**:

   - Features are modular and can be extended without affecting other parts of the system.

2. **Maintainability**:

   - Clear boundaries between core logic and external systems make the code easier to understand and maintain.

3. **Testability**:

   - Core logic is decoupled from frameworks, enabling thorough unit testing.

4. **Framework Independence**:

   - Business logic is reusable and not tied to specific frameworks.

5. **Clarity**:
   - The structure communicates the app's purpose, making it easier for new developers to onboard.

---

## 🏗 Project Structure

### Backend Structure

```plaintext
src/
├── core/                # Core domain (business rules)
│   ├── models/          # Domain models (e.g., Task, Project, User)
│   ├── services/        # Business logic (e.g., TaskService, NotificationService)
│   ├── ports/           # Interfaces for ports (e.g., TaskRepository, NotificationService)
├── adapters/            # External system integrations
│   ├── db/              # Database adapters (PostgreSQL, Redis)
│   ├── api/             # API adapters (e.g., FastAPI endpoints)
│   ├── notifications/   # Notification adapters (email, SMS, etc.)
├── features/            # Feature-based slices
│   ├── tasks/           # Task management feature
│   │   ├── routes.py    # FastAPI routes for tasks
│   │   ├── models.py    # Task database models
│   │   ├── services.py  # Task-related business logic
│   │   ├── schemas.py   # Pydantic schemas for validation
│   │   ├── repository.py # TaskRepository implementation
│   ├── projects/        # Project management feature
│   ├── users/           # User authentication and management feature
├── config/              # App configuration (e.g., environment variables)
├── main.py              # FastAPI entry point
```

### Frontend Structure

```plaintext
src/
├── components/          # Reusable UI components
├── features/            # Feature-based slices
│   ├── tasks/           # UI components and logic for tasks
│   ├── projects/        # UI components and logic for projects
│   ├── users/           # UI components and logic for users
├── hooks/               # Custom React hooks
├── services/            # API calls (e.g., auth, tasks, projects)
├── styles/              # Global and component-specific styles
├── App.tsx              # Main app component
├── index.tsx            # Entry point
```

---

## 🎯 Development Guidelines

1. **Feature-First Development**:

   - Develop features end-to-end, starting from business logic to API endpoints and UI components.

2. **Keep Core Domain Clean**:

   - Avoid importing FastAPI, SQLAlchemy, or other framework-specific libraries into the `core` domain.

3. **Define Ports and Adapters Clearly**:

   - Use `ports` for interfaces and `adapters` for implementations.

4. **Independent Testing**:

   - Write unit tests for core business logic without relying on external systems.
   - Use integration tests for adapters and APIs.

5. **Documentation**:
   - Document each feature in the `/docs` folder.
   - Use clear and consistent naming conventions that reflect the business domain.

---

## 📚 Additional Resources

1. [Hexagonal Architecture Explained](https://alistair.cockburn.us/hexagonal-architecture/)
2. [FastAPI Documentation](https://fastapi.tiangolo.com/)
3. [PostgreSQL Documentation](https://www.postgresql.org/docs/)
4. [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
