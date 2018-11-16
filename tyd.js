function tyd(data, yAxisKeyName) {
    const formattedData = []
    // const columnNames = data['columns']
    // const rowNames = [... new Set(data.map(item => item[yAxisKeyName]))];
    let count = 0
    data.forEach((row) => {
        
        let rowName = row[yAxisKeyName]
        for (let key in row) {
            let cellValue = row[key]
            // this passes header data,so  your column headers don't get treated as cells
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
