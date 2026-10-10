# Inline formatting

The release went out on Thursday. **The migration finished without errors**, although *the backfill took longer than planned*. One item needs ***immediate follow-up***: the old export job is still scheduled and should be ~~left running~~ disabled before Monday.

Remember that ==the staging database is shared with the data team==, so coordinate before you reset it. To check the job status, run `systemctl status export.timer` on the worker host.

Internal links point to other notes, such as [[03 Lists and quotes]] or a heading in [[01 Headings#Hiring and onboarding|the hiring section]]. External links look like [the Obsidian help site](https://help.obsidian.md) and a bare URL like https://obsidian.md.

Tags group notes by topic: #release, #ops/database and #follow-up.

A keyboard shortcut is written as <kbd>Cmd</kbd> + <kbd>P</kbd> to open the command palette.
