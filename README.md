# Jefit

Third-party API for accessing JeFit data

## Installation

`npm install jefit`

OR

`yarn add jefit`

## Prerequisites

* This client will only work if your privacy (under your settings) is set to: <b>Everyone</b>
* Grab your userId from https://www.jefit.com/my-jefit/, look for https://jefit.com/[USERID] url.

## Usage

`var jefit = require('jefit');`

### jefit.fetchMostRecent(userId, callback)

* userId `String`
* callback `Function`

Example:

```
jefit.fetchMostRecent('jjderz', function (result) {
  console.log(result);
});
```

### jefit.fetchSingleDate(username, date, callback)

* username `String`
* date `String` with format `YYYY-MM-DD`
* callback `Function`

Example:

```
jefit.fetchSingleDate('jjderz', '2023-12-11', function (result) {
  console.log(result);
});
```

### Output:

```
{
  "exercises": [
    {
      "sets": [
        {
          "index": 1,
          "weight": 160,
          "reps": 13
        },
        {
          "index": 2,
          "weight": 160,
          "reps": 11
        },
        {
          "index": 3,
          "weight": 160,
          "reps": 9
        }
      ],
      "name": "Leverage Incline Chest Press",
      "oneRepMax": 229,
      "type": "Lift"
    },
    {
      "sets": [
        {
          "index": 1,
          "weight": 140,
          "reps": 9
        },
        {
          "index": 2,
          "weight": 140,
          "reps": 8
        }
      ],
      "name": "Leverage Chest Press",
      "oneRepMax": 182,
      "type": "Lift"
    },
    {
      "sets": [
        {
          "index": 1,
          "weight": 12,
          "reps": 15
        },
        {
          "index": 2,
          "weight": 12,
          "reps": 13
        }
      ],
      "name": "Seated Cable Pec Fly",
      "oneRepMax": 18,
      "type": "Lift"
    },
    {
      "sets": [
        {
          "index": 1,
          "weight": 57.5,
          "reps": 14
        },
        {
          "index": 2,
          "weight": 57.5,
          "reps": 11
        },
        {
          "index": 3,
          "weight": 57.5,
          "reps": 11
        }
      ],
      "name": "Cable Tricep Pushdown (V-Bar)",
      "oneRepMax": 84,
      "type": "Lift"
    },
    {
      "sets": [
        {
          "index": 1,
          "weight": 40,
          "reps": 18
        },
        {
          "index": 2,
          "weight": 40,
          "reps": 12
        },
        {
          "index": 3,
          "weight": 40,
          "reps": 10
        }
      ],
      "name": "Machine Deltoid Raise",
      "oneRepMax": 64,
      "type": "Lift"
    },
    {
      "sets": [
        {
          "index": 1,
          "weight": 16,
          "reps": 16
        },
        {
          "index": 2,
          "weight": 16,
          "reps": 12
        },
        {
          "index": 3,
          "weight": 14,
          "reps": 8
        }
      ],
      "name": "Retro Cable ab crunch",
      "oneRepMax": 24,
      "type": "Lift"
    }
  ],
  "date": "2023-11-12",
  "sessionLength": 3727,
  "actualWorkout": 713,
  "wastedTime": 508,
  "restTimer": 2056,
  "exercisesDone": 6,
  "weightLifted": 12226
}
```

## To Do

- Add proper tests
