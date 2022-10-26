---
sidebar_position: 1
---

# DocuGem

Technical documentation (datapacks) requirements generally revolve around a common set of data but represented in various ways. The reason for such variation stems from the type of technical question being asked ('What is our overall current consumption at this time?' 'We are upgrading the echoscopes, which cable types are compatible with the new connector?'), the technical datapack being compiled ('I need a termination schedule for all 10 panels, today') or the nature of the TSR being addressed; The later also has varying response time windows or deadlines. During inports there are sometimes misalignment of understanding between DBM and vendors or the inport team as a result of missing or inaccurate data capturing.

### Proposal
Implement technical design patterns as code based on declariative criteria (assign FJB io to io cards before everything else, assign ECP statuses to the last io card and in reverse order) and which also enforces safety and design requirements ( ensure that there is enough io card capacity + n% ).

### Goals
- Produce a greater catalogue of baseline technical documentation as a way of driving technical / project decision making processes as well as insights into current and past projects projects; reducing engineering time.

### Potential Applications
- Incease overall level of assurance offered as a team / department
- Increase engineering efficiency and assurance by offering aggregated technical reports, datasheets are searched, downloaded and collated into datapacks
- Integration into existing TSR system such that new configuration documents can be created ahead of time
- Decrease build time with various reports tailored to simplying vendor / client specific technical requirements (build wants overview with terminal numbers, projects wants it without)
- Compatibility with industry 4.0 analytical tools - db export
- Integrate vendor configuration changes (these parts have been exchanged for these newer parts)
- Produce Mining System configuration files which are vendor agnostic and conform to company defined convention
- Automated technical auditing of tender submitted datapacks
- Automated design datapack generation
- Assurance that desgin standards and criteria have been implemented as of x date in response to learnings - audit / compliance
- Generate single compressed datapack with subfolders which may be project / vendor specific for transmittal
- Analytical insight into overall asset / project / operational configuration
- Normalised and consistent naming conventions
