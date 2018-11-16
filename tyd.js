// data input should be an array of objects. if you use a dice inset the 'import data from './data.csv';' works perfectly.
// if you need to feed in a csv and other way, the index.html's script has something to convert plaintext csv to an arrray of objects
function tyd(data, yAxisKeyName) {
    const formattedData = []
    let count = 0
    data.forEach((row) => { 
        let rowName = row[yAxisKeyName]
        for (let key in row) {
            let cellValue = row[key]
            if (cellValue != rowName) {
                const output = {
                    x: key,
                    y: rowName,
                    value: cellValue
                }
                formattedData[count] = output
                count += 1
            }
        }
    })
    console.log('tyd', formattedData)
    return formattedData
}
