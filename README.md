# Reactive programming in AngularJS and Angular 2
## [![Github Repo](./GitHub-Mark-64px.png) peteclodi-meetups/angular_chi-04262017](https://github.com/peteclodi-meetups/angular_chi-04262017)
### [![Angular Chicago Meetup](./Angular_Chicago_Meetup.png) Angular Chicago Meetup group](https://www.meetup.com/Angular-Chicago-Meetup)
#### Held on 4/26/2017 @ [Packback Inc](https://www.packback.co)

---

## The Code

The code for this project is broken up into 2 separate applications
 - Imperative
 - Reactive
 
Each of these apps are the same. They are simple calculators that perform only Addition, Subtraction, Multiplication and Division. Additionally they display a running history of the calculations that have been performed.
 
The differences lie within how they transport data within themselves.
 
### Imperative
 
The Imperative app creates direct connections between the data producer, the data consumer and the data store. These connections are fragile and will cause the app to become more difficult to expand as it becomes larger and more complex.
However these connections are necessary to move data between the data producer (Calculator Form) and the data store (Calculation History); and to move data from the data store to the data consumer (Calculation History).

The most egregious code construct within the application is the Interval created in the Calculation History component used to poll the Calculation History data store. The reason for this code construct is that the app is avoiding all forms of reactive programming, and the only other construct found to retrieve this data is the `EventEmmitter` which is based upon `Observables`.

This polling mechanism is problematic for at least 2 known reasons:
 - The polling interval is arbitrary
 - Debugging a time based polling mechanism is difficult
 
#### The polling interval is arbitrary
 
While it may be possible to zero in on the optimal polling interval. Doing so woud be time consuming and more than likely provide little to no reasonable gains. The current interval was chosen in an attempt to both make the UI "feel" responsive, and to keep the polling short but not too short.
 
#### Debugging a time based polling mechanism is difficult

Anyone who has had to debug an app that contains a time based polling mechanism can attest to the difficulty of pinpointing the exact point **when** a bug is occuring within the polling code. This iis the result of the near constant running of this code and the transient nature of the values it is processing.

### Reactive

The Reactive app handles the transfer of data from the data producer to the data store and finally to the data consumer. It introduces Behavior Subjects to the mix, along with a new service that acts as a data processing and transport layer betwen the data producer and the data store. The usage of Behavior Subjects allows the data producer to decouple from the data store as it only interacts with the new transport layer. This decoupling allows the data producer to be used in an application without the data store, thus making the usage of the components more flexible as they handle only their functionality.

The addition of the transport layer also allows the data store and data consumer to lose their hard linkage to the data producer. It is now possible for different data producers to seed the data consumer as the data producer does not have to have a direct knowledge of the data consumer.

---

## Building and Running the Apps

Both apps were created using version 1.0.1 of the angular-cli. The package mangement was performed by yarn, and the `yarn.lock` file should ensure that the application will continue to build properly into the future.

### Build the Apps

 - Install angular-cli version 1.0.1, or compatible
 - Install yarn
 - Clone this repo
 - To run the Imperative Demo App
   - `cd` into the `imperative` directory
   - Run `yarn` to install the dependencies
   - Run `ng serve` to build and run a local version of the Imperative Demo App
 - To run the Reactive Demo App
   - `cd` into the `reactive` directory
   - Run `yarn` to install the dependencies
   - Run `ng serve` to build and run a local version of the Reactive Demo App