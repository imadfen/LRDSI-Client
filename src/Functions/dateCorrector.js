function dateCorrector(mysqlDate) {
    const dateObject = new Date(mysqlDate);

    const formattedDate = dateObject.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    });

    return formattedDate
}

export default dateCorrector