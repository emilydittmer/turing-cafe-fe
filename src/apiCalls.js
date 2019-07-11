export const addRes = async newRes => {
  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newRes })
    }
    try {
      const response = await fetch('http://localhost:3001/api/v1/reservations', options)
      const parsed = await response.json();
      const secondResponse = await fetch(`http://localhost:3001/api/v1/reservations${parsed.id}`)
      const secondParsed = await secondResponse.json();
      return secondParsed;
    }
    catch (error) {
      throw Error('WRONG')
    }
  }