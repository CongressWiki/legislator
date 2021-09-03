## Private Chat Box

Emulate a private chat room with elected officials that guide you.

## Discussions

### Sign up

Nancy: "So you're my new assistant? I was told that you're quite the patriot."
Nancy: "Well we could really use you right now. As speaker of the house i'm always busy. I need your help to identify which bills I should prioritize by voting on them."
Nancy: "But before I set you loose on the legislation i'll need a few things from you..."
Nancy: "Really quick, my phone shows your name as ${name}, is that right?"

User: <prompt>

1. "Yes, that's my name"
2. "No, I go by another name"

Nancy:
if option 1: <continue>
if option 2: "Okay what should I call you?" <prompt>

Nancy: "Nice to meet you ${name}, what state/territory are you from?"

User: <prompt>
options: [...US states/territory]
option: "I live outside the United States."

Nancy:
if state/territory option: "The great state of ${state}. Last question, which political party do you identify with?"
if out of US option: "Welcome to the United States."

User: <prompt>
option 1: Democrat
option 2: Republican
option 3: Independent
option 4: None of them

Nancy: "Very good! I'm walking into my next committee meeting. Good Luck ${name}!"
