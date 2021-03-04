# Implementation and Libraries Used

- App created with `npx react-native init` with a Typescript template.
- Main libs are: `@react-navigation` (tabs, stacks), `react-native-elements` (components), `react-native-animatable` (animations)
- No global state management used (i.e. Redux, Mobx, Recoil). Not needed in such a small app.

# Non-Obvious Features Beyond Story Requirements

- Long press on a breed cell will grab another random image for that breed
- Pull down on breed images or random images reloads another batch of photos
- Dark mode support in settings

# Connectivity
The app is pretty useless without connectivity. It would be straightforward enough to do the following:
- cache a few images of every breed so it would still do *something*
- Add a listener to NetInfo and a Context provider to update app on net status through a hook

# Tradeoffs / Optimizations

1. The breed list is quite short (even if flattened for sub-breeds). If this were a very long list, it might make sense to move the filtering function to the cloud with something like elastic search. ( Note: I chose to cache the breed list as an example; it's not necessary with such little data.)
2. Image caching could be added beyond what RN provides. Performance seemed acceptable, so I didn't bother.
3. I considered memoizing the initial random image for the breed list. In this case a single image would be shown "forever". It wasn't clear if this was intended behavior, so I didn't do it.
4. If this were a real app, I would implement gradient loading skeletons. However, these generally require "twitchy" gradient libs, so I passed on this for now.
5. There's a bit more use of inline styles than I would have in a real project. This would inhibit UI/UX global changes in a larger app, but for a demo I went with it.

# Possible Bugs

- There are times where a yellobox warning occurs for an empty `uri` for an Image. This seems to be related to mount/dismount, but it could also be bad data. It doesn't kill the app, so I decided to let it go for now.

## Goals

Display list of dog images.

Goal:
Build a screen with autocomplete capability: as a user types some dog breed name, show him the list of suggested breed names as he starts typing each letter, and show the list of dog images associated with the suggested breeds.

a) layout: 
You decide how it looks like, you can go simple or complex with animations, etc... But we’ll evaluate the exercise a lot more on the business logic than on the UI beauty (bonus points if it looks great though).

b) functionality
- Use the dog CEO API described at https://dog.ceo/dog-api/
Autocomplete feature:
as the user types a breed name in a ‘search’ textbox, show the suggestions for breed names as a list (autocomplete feature). Also as he types letters, we immediately show images for all the matching/suggested breeds. (see below). If the user typed nothing (empty string), do not display any images, but the suggested list should contain all breeds.  
Display results features: 
As the user types letter and sees a list of suggested breeds: 
show the images for those breeds immediately (for example in a list below the ‘search’ text box). You can decide on the layout.
So for example:
If the user starts typing “a”, we should display
 “affenpinscher"
"african"
"airedale”
"Akita"
And display all the images for those 4 breeds.
If the user then types “f” (so the string is now “af”), display:
 “affenpinscher"
"African"
And all images for those 2 breeds.

For the purpose of this exercise, please assume that the images can be updated frequently and breeds do change sometimes but infrequently.
Also you can ignore sub-breeds for the purpose of this exercise.

IMPORTANT NOTES:
Focus first on logic to make it functional, not the UI beauty (but if you want to impress us with your UI skills, it’s always appreciated).
It doesn’t have to be perfect given the suggested time spent on it. Please leave some //TODO notes/comments in your code to indicate things you think you should do but don’t have time to code (e.g. cover some edge cases, or improvements in the logic, performance optimizations).
If showing image for all the breeds in the suggested list is too time consuming, then just display the images for one breed (pick the breed at the top of the list) but explain what the logic would be to show all images.
Think about performance and scalability on the server side but don’t go too far in performance optimization implementation (not asking you to spend many many hours on optimizing performance).
We want you to show us your best work, code you’d be proud of. But we do not expect/want you to spend 3 days on this!

Not allowed to use:
Widgets for autocomplete

You are allowed to use your preferred libraries otherwise.
