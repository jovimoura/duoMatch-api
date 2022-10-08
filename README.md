# Duo Match API

<p>
A simple API made with Node, Express, TypeScript, Prisma, Cors, SQLite in dev ambient responsible to do all connections of players and yours games.
</p>

<br />

## Front-end Repo:

```
https://github.com/jovimoura/duoMatch-app
```

<br >

## API Doc.

<br />

### Create Ad(Announcement game)

```
  POST /games/${game-id}/ads
```

| Param   | Type       | Description                      |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Mandatory**. Name of player |

| Param   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `yearsPlaying` | `number` | **Optional**. Years the player has played the game |

| Type   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `discord` | `string` | **Optional**. Discord of the player|

| Type   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `weekDays` | `[number]` | **Mandatory**. Days of the week the player plays|

| Type   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `hourStart` | `string` | **Mandatory**. Start time |

| Type   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `hourEnd` | `string` | **Mandatory**. Finish time |

| Type   | Type       | Description                           |
| :---------- | :--------- | :---------------------------------- |
| `useVoiceChannel` | `boolean` | **Optional**. 
If the player uses the microphone |

<br />

### Get Ad Player(Announcement game)

```
  GET /ads/${game-id}/discord
```

Response: 

```
{
	"discord": "Example discord Name"
}
```

<br />

### Get Games

```
  GET /games
```

Response: 

```
[
	{
		"id": "<id-game>",
		"title": "League of Legends",
		"bannerUrl": "<image-banner>",
		"_count": {
			"ads": 0
		}
	},...
]
```

### Get Games Ads (All announcenents of one game)

```
  GET /games/{game-id}/ads
```

Response: 

```
[
	{
		"id": "<id-player>",
		"name": "Jovimoura",
		"weekDays": [
			"0",
			"5",
			"6"
		],
		"useVoiceChannel": true,
		"yearsPlaying": 2,
		"hourStart": "12:0",
		"hourEnd": "15:0"
	},...
]
```

## Installation

### Clone

```
git clone https://github.com/jovimoura/duoMatch-api
```

### Access the folder

```
cd <name-folder>
```

### Install dependencies

```
npm i
```

### Start the app

```
npm run dev
```

### Port:

```
http://localhost:3333/
```

## Tecnologies and Libs:

<ul>
    <li>Node</li>
    <li>Express</li>
    <li>TypeScript</li>
    <li>Prisma</li>
    <li>Cors</li>
</ul>

<br />

## Made by:

### João Victor dos Santos Moura

### E-mail: joaovictors.mouraa@gmail.com

### Linkedin: https://www.linkedin.com/in/jovimoura10/