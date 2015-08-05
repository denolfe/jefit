# Jefit

Third-party API for accessing JeFit data

## Installation

## Usage

`var jefit = require('jefit');`

### jefit.fetchSingleDate(userId, date, callback)

* userId `String`
* date `String` with format `YYYY-MM-DD`
* callback `Function`

Example:

```
jefit.fetchSingleDate('111111', '2014-01-13', function (result) {
  console.log(result);
});
```

Output:

```
{
  "exercises": [
    {
      "sets": [
        {
          "index": 1,
          "duration": 600
        }
      ],
      "name": "Elliptical Training",
      "oneRepMax": null,
      "type": "Cardio"
    },
    {
      "sets": [
        {
          "index": 1,
          "weight": 25,
          "reps": 12
        },
        {
          "index": 2,
          "weight": 30,
          "reps": 12
        },
        {
          "index": 3,
          "weight": 35,
          "reps": 12
        }
      ],
      "name": "Dumbbell Bench Press",
      "oneRepMax": 49,
      "type": "Lift"
    }
  ],
  "date": "2015-08-03",
  "sessionLength": 1602,
  "actualWorkout": 1062,
  "wastedTime": 0,
  "restTimer": 540,
  "exercisesDone": 2,
  "weightLifted": 1080
}
```

## To Do

- Add proper tests