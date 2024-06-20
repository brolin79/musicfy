import React from "react";
import { Grid, Loader } from "semantic-ui-react";
import { map, size } from 'lodash';
import { Link } from 'react-router-dom';
import '../../scss/components/ListArtist.scss';

export function ListArtist(props) { 

    const { artists } = props;

    if (size(artists) === 0) {
        return (
            <Loader active inline="centered" size="large">Cargando...</Loader>
        );
    }

    return (
        <Grid className="list-artists">
            <Grid.Row columns={5}>
                {map(artists, (artist) => (
                    <Grid.Column 
                        key={artist.id} 
                        as={Link}
                        to={`/artist_detail/${artist.id}`}
                        className="list-artists__artist"
                    >
                        <div style={{ backgroundImage: `url(${artist.image})` }} />
                        <p>{artist.name}</p>
                    </Grid.Column>
                ))}
            </Grid.Row>
            
        </Grid>

    );
}