###### Go to [Google doc developers](https://developers.google.com/maps/documentation/places/web-service/text-search)
###### 2. in the service mfolder create a file Globalapi.jsx
###### 3. PASTE <br>
```bash
const BASE_URL = 'https://places.googleapis.com/v1/places:searchText'
```
###### 4. npm i axios
###### 5. 
```bash
const config={
    headers:{
        'Content-Type':'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        'X-Goog-FieldMask':[
            'places.photos',
            'places.displayName',
            'places.id',

        ]
    }
}
```
###### 6. change foeld masks according to your need.


## Accessing place photos
###### GO to [retrieving place photos](https://developers.google.com/maps/documentation/places/web-service/place-photos)
###### <br>
```bash
https://places.googleapis.com/v1/NAME/media?key=API_KEY&PARAMETERS
```
