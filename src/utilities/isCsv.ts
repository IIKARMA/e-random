export const isCsv = (file: File): boolean => {
    return file.name.includes('csv')
}