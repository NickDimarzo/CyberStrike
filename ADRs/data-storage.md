# Database Storage Requirements for Cyber Strike

Contents:

- Summary
  - Issue
  - Decision
  - Status
- Details
  - Assumptions
  - Constraints
  - Positions
  - Argument
  - Implications
- Related
  - Related decisions
  - Related requirements
  - Related artifacts
  - Related principles
- Notes

## Summary

This ADR is to determine the speculated database storage requirements for the mobile game called Cyber Strike. As the goal for this game is to make a prototype of a point-and-click dungeon crawler with turn based combat, there will be very little data storage necessary.

### Issue

The development team needs to decide how we incorporate and use data storage. Whether we have encrypted or unencrypted storage and where it is stored from the following:

1.  Local
2.  Remote
3.  None

### Decision

After evaluation of the project, the development team decided that no true database storage is required. Instead, a small, singular JSON file will be generated and store locally for saving or loading progress. This file will delete upon completion of the prototype or overridden if the user starts a 'new game'.

### Status

Accepted

## Details

### Assumptions

1. The game will be small enough that generating and storing the JSON will only require a small amount memory and storage on the device itself.
2. Since this is a prototype, there won't be any complex structures implemented that will require encrypted or large data storage.
3. For scalability, encryption of stored data would be required to deter hacking the game itself.

### Constraints

1. File generation should be implemented if the app is closed and not just if the user prompts.

### Positions

1. Local: Data does not need to be shared across multiple devices or from one user to the next. This method, in terms of mobile application game, is used solely used to enhance user experience.

2. Remote: Sharing data across multiple platforms or users to ingratiate a community or seamless continuous gaming. This method is used for large scale games.

3. None: Every session in app is a fresh experience. Any allocated memory is cleared upon close.

### Argument

Local unencrypted data storage would be a suitable choice for Cyber Strike, so as to enhance the user experience. If a user needs to set down the game, they can continue their progress from their last save state. Due to using a layering image system to emulate movement and interaction rather than a full game engine, the generated JSON would merely indicate which images the user has engaged with and which image or screen they are currently on.

### Implications

1. Small local storage requires very little memory allocation.
2. JSON makes loading state quick and efficient.
3. If further development was done on this game, there would need to be a change in encryption to protect the game's code.

## Related

### Related Decisions

Architecture Decision Record - UI Toolkit.

### Related Requirements

User interface design.

### Related Artifacts

UI wire frames, design mockups.

### Related Principles

Overall game play, Game design and feel.

## Notes

Further analysis may require a more robust data storage methodology.
