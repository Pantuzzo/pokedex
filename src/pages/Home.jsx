import { Grid, Container } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import { Skeletons } from '../components/Skeletons';
import Pagination from '../components/Pagination';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getPokemons();
    }, [currentPage]);

    const getPokemons = () => {
        const itemsPerPage = 15;
        const offset = (currentPage - 1) * itemsPerPage;

        var endpoints = [];
        for (let i = offset + 1; i <= offset + itemsPerPage; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((resp) => setPokemons(resp));
        return response;
    }

    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === "") {
            getPokemons();
        }
        for (let i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.length === 0 ? (
                        <Skeletons />
                    ) : (
                        pokemons.map((pokemon, key) => (
                            <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Grid>
                        ))
                    )}
                </Grid>
            </Container>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}
