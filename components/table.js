import { useState } from 'react';
import toCamelCase from '/tools/toCamelCase'
import Head from 'next/head'

const Table = ({
    data,
    addPlayer
}) => {
    const [player, setPlayer] = useState({
        characterName: '',
        class: '',
        level: 1,
        confirmed: false
    })
    
    
    const setPlayerProperty = (property) => ({ target: { value } }) => {
        setPlayer({
            ...player,
            [property]: value
        });
    }
    
    const {
        rows,
        columnLabels
    } = data;

    const colLabelsWithActions = columnLabels.concat('Actions');

    return <>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        </Head>
        <table className="table table-hover">
        <thead>
        <tr>
            {
                colLabelsWithActions.map((col, index) => <th scope="col" key={index}>{col}</th>)
            }
        </tr>
        </thead>
        <tbody>
            {
                rows.map((row, rowIndex) => <tr key={rowIndex}>
                    {
                        colLabelsWithActions.map((label, colIndex) => {
                            if (label.toLowerCase() == 'actions') {
                                return <td key={colIndex}>
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <button type="button" className="btn btn-success">Confirm</button>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            } else if (label.toLowerCase() == 'confirmed') {
                                return <td key={colIndex}>{row[toCamelCase(label)] ? '✔️' : '❌' }</td>
                            }
                            return <td key={colIndex}>{row[toCamelCase(label)]}</td>
                        })
                    }
                </tr>
                )
            }
            <tr>
                <td>
                    <div class="input-group mb-3" onChange={setPlayerProperty('characterName')}>
                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </td>
                <td>
                    <div class="input-group mb-3">
                    <select className="custom-select" onChange={setPlayerProperty('class')}>
                        <option defaultValue value="NS">Choose...</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Mechanician">Mechanician</option>
                        <option value="Archer">Archer</option>
                        <option value="Pikeman">Pikeman</option>
                        <option value="Atalanta">Atalanta</option>
                        <option value="Knight">Knight</option>
                        <option value="Magician">Magician</option>
                        <option value="Priestess">Priestess</option>
                        <option value="Assassin">Assassin</option>
                        <option value="Shaman">Shaman</option>
                        <option value="Brawler">Brawler</option>
                    </select></div>
                </td>
                <td>
                    <div class="input-group mb-3">
                        <input type="number" min={1} max={171} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={setPlayerProperty('level')}/>
                    </div>
                </td>
                <td colSpan='2'>
                    <button type="button" className="btn btn-success" onClick={() => addPlayer(player)}> + Add Player</button>
                </td>
            </tr>
        </tbody>
    </table>
    </>
}

export default Table;