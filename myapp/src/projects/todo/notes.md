Why Store completed in the Parent?

completed is part of the task, not part of the TaskList component.

The parent (Todo) owns the tasks, so it should also own each task's completed status.

Even if TaskList:

re-renders
unmounts
mounts again

the task data remains safe in the parent state.

Why Use an Array of Objects?

const tasks = ["Study", "Sleep"]; ❌ Less flexible

const tasks = [
  {
    id: 1,
    text: "Study",
    completed: false,
  },
];  ✅ Recommended

Objects allow each task to store multiple properties, such as:

id
text
completed
priority
createdAt
Why Use id Instead of index?
 
Use: key={task.id}



Avoid: key={index}

Reason:

Indexes change when items are added, removed, or reordered.

A stable id helps React correctly identify each task during reconciliation and preserves the correct state for each item.

// Where to Write Code in React: Module Level vs Component Level
/*
Situation                         Best Location
------------------------------------------------------------
Shared constant/configuration     Module level
Shared helper function            Module level
Component-specific event handler  Component ke andar
Props/state par depend logic      Component ke andar
Expensive initial state           useState(getInitialData)
                                  (Lazy initializer)
*/

Simple rules:
- Shared constant: same value ko multiple jagahon par use karna.
- Shared helper: same utility function ko multiple jagahon par use karna.
- Lazy initializer: initial state calculate karne wala function, jise har render par chalane ki zaroorat nahi.