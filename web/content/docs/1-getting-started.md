---
title: Getting Started
description: Quick start guide for AI DevKit
order: 1
---

## Installation

Install AI DevKit globally using npm:

```bash
npm install -g ai-devkit
```

Or use it directly with npx:

```bash
npx ai-devkit init
```

## Initialize Your Project

In your project directory, run:

```bash
ai-devkit init
```

This will:
- Create a `docs/ai/` directory structure for your development phases
- Set up phase templates for requirements, design, planning, implementation, testing, deployment, and monitoring
- Copy environment-specific rules for CursorAI or Claude Code

## Project Structure

After initialization, you'll have:

```
docs/ai/
├── requirements/    # Problem understanding and requirements
├── design/          # System architecture and design decisions
├── planning/        # Task breakdown and project planning
├── implementation/  # Implementation guides and notes
├── testing/         # Testing strategy and test cases
├── deployment/      # Deployment and infrastructure docs
└── monitoring/      # Monitoring and observability setup
```

## Using Commands

AI DevKit provides helpful commands to guide your development workflow:

- `/new-requirement` - Start a new feature with structured documentation
- `/review-requirements` - Review requirements documentation
- `/review-design` - Validate design docs against requirements
- `/execute-plan` - Work through implementation tasks
- `/writing-test` - Generate comprehensive test cases
- `/code-review` - Perform structured code reviews

## Next Steps

1. Review the phase templates in `docs/ai/`
2. Start your first feature with `/new-requirement`
3. Follow the structured workflow through each phase
4. Keep documentation updated as you implement

For more details, check out our [documentation](/docs) and [roadmap](/roadmap).

