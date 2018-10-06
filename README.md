# Explore The Universe
This application allows viewing information about the Universe.

![screenshot 2018-10-05 at 16 43 13](https://user-images.githubusercontent.com/30631373/46542427-a6a56a00-c8be-11e8-8a0d-d92b7aaa1346.png)

## How data are fetch.
``` jsx
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (formData) => {
            fetch('https://images-api.nasa.gov/search?q=' + formData + '&media_type=image')
            .then(res => res.json())
            .then(data => dispatch({
                type: 'FETCH_DATA',
                payload: data.collection.items
            }));
        }
    }
}
```  
