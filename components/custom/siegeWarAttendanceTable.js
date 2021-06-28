import Table from '/components/table'

const siegeWarAttendanceTable = () => {
    const data = {
        columnLabels: ['Character Name', 'Class', 'Level', 'Confirmed'],
        rows: [
            {
                characterName: 'Pebbles',
                class: 'Shaman',
                level: 160,
                Confirmed: true
            }
        ]
    }

    const addPlayer = (player) => {
        data.rows = data.rows.concat(player)
        console.log(data.rows)
    }

    const removePlayer = (playerIndex) => {
        data.rows = data.rows.slice(0, playerIndex).concat(data.rows.slice(playerIndex + 1))
    }


    return <Table
        data={data}
        addPlayer={addPlayer}
        removePlayer={removePlayer}
    />
}

export default siegeWarAttendanceTable