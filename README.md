# AI DevKit

A CLI toolkit for AI-assisted software development with structured phase templates and environment setup for Cursor and Claude Code.

[![npm version](https://img.shields.io/npm/v/ai-devkit.svg)](https://www.npmjs.com/package/ai-devkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎯 **Phase-based Development**: Structured templates for each stage of the software development lifecycle
- 🤖 **AI Environment Setup**: Automatic configuration for Cursor and Claude Code
- 📝 **Customizable Templates**: Markdown-based templates with YAML frontmatter
- 🚀 **Interactive CLI**: User-friendly prompts with flag override support
- ⚙️ **State Management**: Tracks initialized phases and configuration

## Installation

```bash
# Using npx (no installation needed)
npx ai-devkit init

# Or install globally
npm install -g ai-devkit
```

## Quick Start

Initialize AI DevKit in your project:

```bash
# Interactive mode (recommended)
ai-devkit init

# With flags
ai-devkit init --environment cursor --all

# Initialize specific phases
ai-devkit init --phases requirements,design,planning
```

This will:
1. Create a `.ai-devkit.json` configuration file
2. Set up your AI development environment (Cursor/Claude Code)
3. Generate phase templates in `docs/ai/`

Detailed user guide can be found [here](https://ai-devkit.com/docs/).

## Visual Workflow

### Complete Development Lifecycle

```mermaid
graph TD
    A["Start: Initialize Project"] --> B{"Choose Environment"}
    B -->|Cursor| C1[".cursor directory"]
    B -->|Claude| C2[".claude directory"]
    B -->|Both| C3["Both directories"]
    
    C1 --> D["Phase Templates Created"]
    C2 --> D
    C3 --> D
    
    D --> E["Requirements Phase"]
    E --> F["Design Phase"]
    F --> G["Planning Phase"]
    G --> H["Implementation Phase"]
    H --> I["Testing Phase"]
    I --> J["Deployment Phase"]
    J --> K["Monitoring Phase"]
    
    style A fill:#90EE90
    style K fill:#FFB6C1
```

### Day-to-Day Development Workflows

```mermaid
graph LR
    subgraph "Feature Development Flow"
        A1[New Feature Idea] -->|use command| A2[new requirement]
        A2 --> A3[Document Requirements]
        A3 --> A4[Review Design]
        A4 --> A5[Create Plan]
        A5 -->|use command| A6[execute plan]
        A6 --> A7[Write Code]
        A7 --> A8[Write Tests]
        A8 -->|use command| A9[code review]
        A9 --> A10[Create PR]
    end
    
    subgraph "Maintenance & Updates"
        B1[Design Change] -->|use command| B2[review design]
        B2 -->|use command| B3[update planning]
        B3 --> B4[Implement]
        B4 -->|use command| B5[check implementation]
        B5 -->|use command| B6[writing test]
    end
    
    subgraph "Understanding Existing Code"
        C1[Complex Codebase] -->|use command| C2[capture knowledge]
        C2 --> C3[Generated Diagrams]
        C3 --> C4[Documented Explanations]
    end
```

### Command Usage Flow

```mermaid
sequenceDiagram
    participant Dev as Developer
    participant CLI as AI DevKit CLI
    participant Docs as Phase Docs
    participant AI as AI Assistant
    participant Git as Git/GitHub
    
    Note over Dev,Git: Initial Setup
    Dev->>CLI: ai devkit init with environment cursor and all
    CLI->>Docs: Create phase templates
    CLI->>Docs: Create cursor commands directory
    CLI-->>Dev: Setup complete
    
    Note over Dev,Git: Feature Development
    Dev->>AI: new requirement: Add user authentication
    AI->>Docs: Read requirements phase
    AI->>Docs: Update requirements md
    AI->>Docs: Create design md with diagrams
    AI->>Docs: Create planning md with tasks
    
    Dev->>AI: execute plan
    AI->>Docs: Read planning md
    AI->>Dev: Show task 1
    Dev->>Dev: Implement task
    Dev->>AI: write test
    AI->>Docs: Create test files
    Dev->>AI: code review
    AI->>Docs: Check against design md
    AI-->>Dev: Review feedback
    
    Dev->>Git: git commit and push
    Dev->>Git: Create PR
    
    Note over Dev,Git: Maintenance
    Dev->>AI: review design
    AI->>Docs: Analyze design md
    AI-->>Dev: Design insights
    Dev->>Docs: Update design
    Dev->>AI: update planning
    AI->>Docs: Update planning md
```

### Command Quick Decision Tree

```mermaid
flowchart TD
    Start{"What do you want to do?"}
    
    Start -->|New Project| Init[ai devkit init]
    Start -->|Add Phase| Phase[ai devkit phase]
    Start -->|New Feature| Feature[new requirement]
    Start -->|Implement| Implement[execute plan]
    Start -->|Review Code| Review[code review]
    Start -->|Write Tests| Test[writing test]
    Start -->|Update Plan| Update[update planning]
    Start -->|Check Design| Check[check implementation]
    Start -->|Review Design| Design[review design]
    Start -->|Review Reqs| Reqs[review requirements]
    Start -->|Understand Code| Capture[capture knowledge]
    
    Init --> Setup[Setup complete]
    Phase --> Added[Phase added]
    Feature --> Documented[Requirement documented]
    Implement --> Coded[Task completed]
    Review --> Approved[Code reviewed]
    Test --> Tested[Tests written]
    Update --> Planned[Plan updated]
    Check --> Verified[Implementation verified]
    Design --> Designed[Design reviewed]
    Reqs --> ReqReviewed[Requirements reviewed]
    Capture --> Explained[Code explained with diagrams]
    
    Setup --> Done[Continue development]
    Added --> Done
    Documented --> Done
    Coded --> Done
    Approved --> Done
    Tested --> Done
    Planned --> Done
    Verified --> Done
    Designed --> Done
    ReqReviewed --> Done
    Explained --> Done
```

### Phase Transition Workflow

```mermaid
stateDiagram-v2
    [*] --> Initialize: ai devkit init
    
    Initialize --> Requirements: Start
    Requirements --> Design: Complete requirements
    Design --> Planning: Design approved
    Planning --> Implementation: Plan ready
    Implementation --> Testing: Code complete
    Testing --> Deployment: Tests passed
    Deployment --> Monitoring: Deployed
    
    Requirements --> Requirements: review requirements
    Design --> Design: review design
    Planning --> Planning: update planning
    Implementation --> Design: check implementation
    Implementation --> Planning: Need more tasks
    Testing --> Implementation: Fix bugs
    Deployment --> Implementation: Rollback needed
    
    Monitoring --> [*]: Project complete
    
    note right of Requirements
        Document problems,
        gather requirements,
        define success criteria
    end note
    
    note right of Design
        Architecture diagrams,
        data models,
        component design
    end note
    
    note right of Planning
        Task breakdown,
        milestones,
        timeline
    end note
    
    note right of Implementation
        Write code,
        follow patterns,
        document changes
    end note
    
    note right of Testing
        Unit tests,
        integration tests,
        quality checks
    end note
    
    note right of Deployment
        Infrastructure,
        release process,
        rollback plan
    end note
    
    note right of Monitoring
        Metrics,
        alerts,
        observability
    end note
```

## Available Phases

- **Requirements**: Problem understanding, requirements gathering, and success criteria
- **Design**: System architecture, data models, and technical design (include mermaid diagrams for architecture/data flow)
- **Planning**: Task breakdown, milestones, and project timeline
- **Implementation**: Technical implementation notes and code guidelines
- **Testing**: Testing strategy, test cases, and quality assurance
- **Deployment**: Deployment process, infrastructure, and release procedures
- **Monitoring**: Monitoring strategy, metrics, alerts, and observability

## Commands

### `ai-devkit init`

Initialize AI DevKit in your project.

**Options:**
- `-e, --environment <env>`: Specify environment (cursor|claude|both)
- `-a, --all`: Initialize all phases at once
- `-p, --phases <phases>`: Comma-separated list of specific phases

**Examples:**
```bash
# Interactive mode
ai-devkit init

# Initialize for Cursor with all phases
ai-devkit init --environment cursor --all

# Initialize specific phases
ai-devkit init --phases requirements,design,implementation
```

### `ai-devkit phase [name]`

Add or update a specific phase template.

**Examples:**
```bash
# Interactive selection
ai-devkit phase

# Add specific phase
ai-devkit phase requirements
ai-devkit phase testing
```

## Generated Structure

After initialization, your project will have:

```
your-project/
├── .ai-devkit.json           # Configuration and state
├── docs/
│   └── ai/
│       ├── requirements/
│       │   └── README.md
│       ├── design/
│       │   └── README.md
│       ├── planning/
│       │   └── README.md
│       ├── implementation/
│       │   └── README.md
│       ├── testing/
│       │   └── README.md
│       ├── deployment/
│       │   └── README.md
│       └── monitoring/
│           └── README.md
└── [Environment-specific files]
```

### For Cursor:
```
└── .cursor/
    ├── rules/                # Project-specific rules (Markdown files)
    │   └── ai-devkit.md
    └── commands/             # Custom slash commands (Markdown files)
        ├── new-requirement.md
        ├── code-review.md
        ├── execute-plan.md
        ├── writing-test.md
        ├── update-planning.md
        ├── check-implementation.md
        ├── review-design.md
        ├── review-requirements.md
        └── capture-knowledge.md
```

### For Claude Code:
```
└── .claude/
    ├── CLAUDE.md             # Workspace configuration
    └── commands/             # Custom commands (Markdown files)
        ├── new-requirement.md
        ├── code-review.md
        ├── execute-plan.md
        ├── writing-test.md
        ├── update-planning.md
        ├── check-implementation.md
        ├── review-design.md
        ├── review-requirements.md
        └── capture-knowledge.md
```

## Customizing Templates

All templates are plain Markdown files with YAML frontmatter. You can customize them to fit your project's needs:

```markdown
---
phase: requirements
title: Requirements & Problem Understanding
description: Clarify the problem space, gather requirements, and define success criteria
---

# Your custom content here
```

Templates are designed to provide structure while remaining concise and AI-friendly.

## Environment Setup

### Cursor

Generated files:
- `.cursor/rules/`: Project-specific rules as Markdown files (per [Cursor documentation](https://cursor.com/docs/context/rules))
- `.cursor/commands/`: Custom slash commands as Markdown files (per [Cursor documentation](https://cursor.com/docs/agent/chat/commands))

Available slash commands:
- `/new-requirement`: Complete workflow for adding a new feature from requirements to PR
- `/code-review`: Structured local code review against design docs before pushing changes
- `/execute-plan`: Walk a feature plan task-by-task with interactive prompts
- `/writing-test`: Write unit/integration tests targeting 100% coverage
- `/update-planning`: Update planning and task breakdown
- `/check-implementation`: Compare implementation with design
- `/review-design`: Review system design and architecture
- `/review-requirements`: Review and summarize requirements
- `/capture-knowledge`: Analyze and document complex code with dependency analysis and diagrams

Each command is stored as a plain Markdown file in `.cursor/commands/` and will automatically appear when you type `/` in Cursor's chat input.

### Claude Code

Generated files:
- `.claude/CLAUDE.md`: Workspace configuration and guidelines
- `.claude/commands/`: Custom commands as Markdown files

Available commands:
- `new-requirement` - Complete workflow for adding a new feature from requirements to PR
- `code-review` - Structured local code review against design docs before pushing changes
- `execute-plan` - Walk a feature plan task-by-task with interactive prompts
- `writing-test` - Write unit/integration tests targeting 100% coverage
- `update-planning` - Update planning and task breakdown
- `check-implementation` - Compare implementation with design
- `review-design` - Review system design and architecture
- `review-requirements` - Review and summarize requirements
- `capture-knowledge` - Analyze and explain code with recursive dependency analysis and Mermaid diagrams

Commands can be referenced in Claude Code chats to guide AI assistance through your development phases.

## Workflow Examples

### Initial Project Setup

1. **Initialize your project:**
   ```bash
   ai-devkit init
   ```

2. **Start with requirements:**
   - Fill out `docs/ai/requirements/README.md`
   - Use your AI assistant to help clarify and document requirements

3. **Design your system:**
   - Complete `docs/ai/design/README.md` and feature-specific files
   - Include mermaid diagrams for architecture, component interactions, and data flow
   - Reference requirements when making design decisions

4. **Plan your work:**
   - Break down tasks in `docs/ai/planning/README.md`
   - Estimate and prioritize

5. **Implement with guidance:**
   - Follow patterns in `docs/ai/implementation/README.md`
   - Keep implementation notes updated

6. **Test thoroughly:**
   - Use `docs/ai/testing/README.md` as your testing guide
   - Document test cases and results

7. **Deploy confidently:**
   - Follow deployment procedures in `docs/ai/deployment/README.md`

8. **Monitor and iterate:**
   - Set up monitoring per `docs/ai/monitoring/README.md`

### Understanding Existing Code with Capture Knowledge

The `capture-knowledge` command helps you analyze and document complex code by creating structured documentation with diagrams. This is especially useful when:
- Working with legacy code or unfamiliar codebases
- Onboarding new team members
- Planning refactoring or improvements
- Documenting complex business logic

#### Step-by-Step Guide

**Step 1: Start the command**

```bash
# In Cursor: Type /capture-knowledge in the AI chat
# In Claude Code: Mention "capture-knowledge" in your chat
```

**Step 2: Provide entry point**

Tell the AI what you want to understand. Examples:

```
I want to understand the authentication system. Start with src/auth/index.ts
```

```
Help me understand the payment processing flow in the checkout module
```

```
I need to understand how user data is validated in the api/users directory
```

**Step 3: AI analyzes the code**

The AI will:
1. Read the entry point file
2. Build a dependency tree (up to depth 3)
3. Track relationships between modules
4. Extract core logic and patterns
5. Identify important external dependencies

**Step 4: Review generated documentation**

The AI creates a file in `docs/ai/implementation/knowledge-*.md` containing:
- Overview of the code's purpose
- Implementation details with key logic
- Dependency diagram (Mermaid)
- Data flow or execution flow diagrams
- Error handling and edge cases
- Potential improvements or concerns
- Metadata (analysis date, files analyzed)

**Step 5: Refine if needed**

Ask for deeper analysis of specific areas:

```
Go deeper into the database query layer
```

```
Show me the error handling patterns
```

```
Focus more on the security aspects
```

#### Real Example

Let's say you want to understand a user authentication system:

**Input:**
```
/capture-knowledge

Entry point: src/auth/middleware.ts
Goal: Understand how authentication and authorization work in this API
```

**AI Process:**
1. Reads `src/auth/middleware.ts`
2. Follows imports to `src/auth/jwt.ts`, `src/auth/permissions.ts`
3. Traces dependencies to `src/db/models/User.ts`
4. Analyzes external packages used
5. Creates diagrams showing the authentication flow

**Output:** `docs/ai/implementation/knowledge-auth-middleware.md`

```markdown
# Authentication Middleware Analysis

## Overview
The authentication middleware validates JWT tokens and enforces role-based access control...

## Dependencies
- Internal: jwt.ts, permissions.ts, User model
- External: jsonwebtoken, express

## Flow Diagram
```mermaid
sequenceDiagram
    Client->>Middleware: Request with JWT
    Middleware->>JWT: Verify token
    JWT-->>Middleware: User payload
    Middleware->>Permissions: Check role
    Permissions-->>Middleware: Allowed
    Middleware->>Router: Next()
```

## Core Logic
1. Extract token from Authorization header
2. Verify signature and expiry
3. Check user permissions
4. Attach user context to request
...

## Findings
- Uses HS256 algorithm with secret key
- Refresh token not implemented
- Permission checks could be cached
```

#### Best Practices

1. **Start broad, then go deep**
   - First capture the overall architecture
   - Then use `/capture-knowledge` again for specific modules

2. **Provide context**
   - Mention why you're analyzing this code
   - Specify what aspects are most important

3. **Use the output**
   - Review diagrams to understand relationships
   - Share with team members for onboarding
   - Reference during code reviews

4. **Keep it updated**
   - Re-run when significant changes are made
   - Update manually if refactoring occurs

5. **Iterate**
   - First capture might be high-level
   - Ask follow-up questions for details

#### Common Use Cases

**Onboarding to a codebase:**
```
/capture-knowledge src/api/routes/users.ts
Goal: Help me understand the user management API endpoints
```

**Debugging a bug:**
```
/capture-knowledge src/services/payment.ts
Goal: I need to understand the payment processing flow to fix issue #123
```

**Planning refactoring:**
```
/capture-knowledge src/utils/dataProcessor.ts
Goal: Analyze this file before refactoring to understand dependencies
```

**Documenting architecture:**
```
/capture-knowledge src/
Goal: Create overview documentation of the main architecture patterns
```

### Creating New Features with New Requirement

The `/new-requirement` command provides a complete workflow for adding new features from initial requirements to creating a Pull Request. This systematic approach ensures proper documentation, design, and planning before implementation.

#### When to Use

Use this command when:
- Adding a new feature to your project
- Starting work on a user story
- Implementing a new API or service
- Adding functionality that requires design and planning
- Ensuring complete documentation before coding

#### Complete Workflow Overview

```mermaid
graph TD
    A[Start: New Feature Idea] --> B[Step 1: Capture Requirement]
    B --> C[Step 2: Create Feature Docs]
    C --> D[Step 3: Requirements Phase]
    D --> E[Step 4: Design Phase]
    E --> F[Step 5: Planning Phase]
    F --> G[Step 6: Review Docs]
    G --> H[Step 7: Implementation Phase]
    H --> I[Step 8: Testing Phase]
    I --> J[Step 9: Local Testing]
    J --> K[Step 10: Code Review]
    K --> L[Step 11: Create PR]
    
    style A fill:#90EE90
    style L fill:#FFB6C1
```

#### Step-by-Step Guide

**Step 1: Start the command**

```bash
# In Cursor: Type /new-requirement in the AI chat
# In Claude Code: Mention "new-requirement" in your chat
```

**Step 2: Define your feature**

The AI will ask you:

```
What is the feature name? (e.g., "user-authentication", "payment-integration")
What problem does it solve?
Who will use it?
What are the key user stories?
```

**Example:**
```
Feature name: user-notifications
Problem: Users don't know when there are updates to their projects
Users: Project owners and collaborators
User stories:
- As a project owner, I want to receive email notifications when someone comments
- As a collaborator, I want to get notified when my task is assigned
- As a user, I want to configure my notification preferences
```

**Step 3: Documents created automatically**

The AI creates feature-specific documentation files:
- `docs/ai/requirements/feature-{name}.md`
- `docs/ai/design/feature-{name}.md`
- `docs/ai/planning/feature-{name}.md`
- `docs/ai/implementation/feature-{name}.md`
- `docs/ai/testing/feature-{name}.md`

**Step 4-6: Documentation phases**

The AI guides you through each documentation phase:

**Requirements Phase** (`docs/ai/requirements/feature-{name}.md`):
- Clarify problem statement
- Define goals and non-goals
- Write detailed user stories
- Establish success criteria
- Identify constraints

**Design Phase** (`docs/ai/design/feature-{name}.md`):
- System architecture changes
- Data models/schema changes
- API endpoints or interfaces
- Components to create/modify
- Design decisions and rationale

**Planning Phase** (`docs/ai/planning/feature-{name}.md`):
- Task breakdown with subtasks
- Dependencies identification
- Effort estimates
- Implementation order
- Risks and mitigation

**Step 7: Document review**

The AI automatically runs:
- `/review-requirements` to validate completeness
- `/review-design` to ensure alignment

**Step 8-10: Implementation and testing**

For each task in your plan:
1. Review task requirements and design
2. Implement with AI guidance
3. Update implementation notes
4. Write tests with `/writing-test`
5. Run local testing
6. Review with `/code-review`

**Step 11: Create Pull Request**

The AI generates a PR description template:

```markdown
## Feature: User Notifications

### Summary
Implements real-time and email notifications for project updates...

### Requirements
- Documented in: `docs/ai/requirements/feature-user-notifications.md`
- Related to: #123

### Changes
- Added notification service
- Updated user preferences API
- Created email templates

### Design
- Architecture: Event-driven with queue
- Key decisions: Async processing for performance

### Testing
- Unit tests: 95% coverage
- Integration tests: All scenarios covered
- Manual testing: Completed
- Test documentation: `docs/ai/testing/feature-user-notifications.md`

### Checklist
- [x] Code follows project standards
- [x] All tests pass
- [x] Documentation updated
- [x] No breaking changes
- [x] Ready for review
```

#### Real Example: Building a Notification System

**Input:**
```
/new-requirement

Feature name: user-notifications
Problem: Users miss important updates about their projects
Users: All authenticated users
User stories: See example above
```

**AI Process:**

**1. Creates documents:**
```
Created: docs/ai/requirements/feature-user-notifications.md
Created: docs/ai/design/feature-user-notifications.md
Created: docs/ai/planning/feature-user-notifications.md
Created: docs/ai/implementation/feature-user-notifications.md
Created: docs/ai/testing/feature-user-notifications.md
```

**2. Requirements phase:**
```markdown
# Feature: User Notifications

## Problem Statement
Users currently have no way to know about important updates...

## Goals
- Email notifications for critical events
- In-app notification center
- User-configurable preferences
...

## Success Criteria
- 90% of users receive notifications within 5 seconds
- Zero duplicate notifications
- 100% delivery rate for critical events
```

**3. Design phase:**
```markdown
# Design: User Notifications

## Architecture
- Notification service (microservice)
- Event-driven with message queue
- Email service integration

## Data Models
```mermaid
erDiagram
    User ||--o{ Notification : receives
    Notification ||--|| NotificationPreferences : uses
    Event ||--o{ Notification : triggers
    
    User {
        string id
        string email
    }
    Notification {
        string id
        string type
        datetime createdAt
        boolean read
    }
```

## API Endpoints
- POST /api/notifications/preferences
- GET /api/notifications
- PUT /api/notifications/:id/read
```

**4. Planning phase:**
```markdown
# Planning: User Notifications

## Task Breakdown

### 1. Database Schema
- Create notifications table
- Create notification_preferences table
- Add indexes
- Estimated: 2 hours

### 2. Notification Service
- Event listener setup
- Notification generation logic
- Email integration
- Estimated: 8 hours

### 3. API Endpoints
- Preferences API
- Notifications list API
- Mark as read API
- Estimated: 4 hours
...
```

**5. Implementation** (using `/execute-plan`):
```
/execute-plan

Task 1: Database Schema
- [ ] Create migrations
- [ ] Write tests
- [ ] Review
```

**6. Create PR:**
```bash
gh pr create --title "feat: user-notifications" --body-file pr-description.md
```

#### Best Practices

1. **Complete documentation first**
   - Don't skip requirements or design
   - Well-documented features are easier to implement

2. **Be specific in user stories**
   - Clear user stories lead to better design
   - Include acceptance criteria

3. **Review before implementing**
   - Get feedback on design
   - Adjust plan based on reviews

4. **Update as you go**
   - Document implementation decisions
   - Keep testing documentation current

5. **Use chained commands**
   - Automatically run `/review-requirements` and `/review-design`
   - Use `/execute-plan` for implementation
   - Use `/writing-test` for testing

6. **Keep PRs focused**
   - One feature per PR
   - Reference documentation in PR description

#### Common Use Cases

**Building a new API:**
```
/new-requirement

Feature: user-profile-api
Problem: Need centralized user profile management
Users: Mobile and web clients
User stories:
- As a client, I want to fetch user profile data
- As a client, I want to update user profile
- As a user, I want to upload profile picture
```

**Adding a dashboard feature:**
```
/new-requirement

Feature: analytics-dashboard
Problem: Users need insights into their activity
Users: Business users
User stories:
- As a business user, I want to see usage statistics
- As a manager, I want to export reports
- As an admin, I want real-time metrics
```

**Integrating third-party service:**
```
/new-requirement

Feature: stripe-payment-integration
Problem: Need to accept online payments
Users: Customers and admins
User stories:
- As a customer, I want to pay with credit card
- As a customer, I want to save payment methods
- As an admin, I want to view payment history
```

#### Tips for Success

1. **Start with the problem**
   - Clearly define what you're solving
   - Avoid solution-first thinking

2. **Include all stakeholders**
   - Get input from product, design, and engineering
   - Validate user stories early

3. **Break down complex features**
   - Use `/new-requirement` for major features
   - Break into smaller sub-features if needed

4. **Keep documentation in sync**
   - Update docs as implementation changes
   - Regular sync prevents drift

5. **Use the planning to estimate**
   - Accurate planning = accurate estimates
   - Helps with sprint planning

## Use Cases

- **New Projects**: Scaffold complete development documentation
- **Existing Projects**: Add structured documentation gradually
- **Team Collaboration**: Share common development practices
- **AI Pair Programming**: Provide context for AI assistants
- **Knowledge Management**: Document decisions and patterns

## Best Practices

1. **Keep templates updated**: As your project evolves, update phase documentation
2. **Reference across phases**: Link requirements to design, design to implementation
3. **Use with AI assistants**: Templates are designed to work well with AI code assistants
4. **Customize for your needs**: Templates are starting points, not rigid requirements
5. **Track decisions**: Document architectural decisions and their rationale

## Configuration File

The `.ai-devkit.json` file tracks your setup:

```json
{
  "version": "0.2.0",
  "environment": "cursor",
  "initializedPhases": ["requirements", "design", "planning"],
  "createdAt": "2025-10-14T...",
  "updatedAt": "2025-10-14T..."
}
```

## Development

To work on ai-devkit itself:

```bash
# Clone the repository
git clone <repository-url>
cd ai-devkit

# Install dependencies
npm install

# Run in development mode
npm run dev init

# Build
npm run build

# Test locally
npm link
ai-devkit init
```

> **Note:** `ai-devkit init` now ensures the current directory is a git repository. If git is available and the repo isn't initialized, it will run `git init` automatically.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT

---

**Happy building with AI! 🚀**

## Quick Reference

| Task | Command |
|------|---------|
| Initialize everything | `npx ai-devkit init --all` |
| Initialize for Cursor | `npx ai-devkit init --environment cursor` |
| Add specific phases | `npx ai-devkit init --phases requirements,design` |
| Add one phase later | `npx ai-devkit phase testing` |
| Guided feature workflow | `/new-requirement` (Cursor & Claude) |
| Execute feature plan | `/execute-plan` (Cursor & Claude) |
| Generate tests | `/writing-test` (Cursor & Claude) |
| Local code review | `/code-review` (Cursor & Claude) |
| Help | `npx ai-devkit --help` |

| Quick links | Description |
|-------------|-------------|
| [CHANGELOG.md](CHANGELOG.md) | Recent changes and release notes |
| [templates/](templates/) | Phase and environment templates |

