export function tyd(data, yAxisKeyName) {
    this.formattedData = []
    this.columnNames = data['columns']
    this.rowNames = [... new Set(data(map(item => item[yAxisKeyName])))];
    let count = 0
    data.forEach((row) => {
        let rowName = row[yAxisKeyName]
        for (let key in row) {
            let cellValue = row[key]
            // this passes header data,so  your column headers don't get treated as cells
            if (cellValue != yName) {
                const output = {
                    x: key,
                    y: rowName,
                    value: +cellValue
                }
                this.formattedData[count] = output
                count += 1
            }
        }
    })
    return this.formattedData
}