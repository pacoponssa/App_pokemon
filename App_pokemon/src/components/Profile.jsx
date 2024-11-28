import {
	Stack,
	Chip,
	Card,
	CardContent,
	Typography,
} from '@mui/material'
import { useAppContext } from '../providers/DataProvider'

export default function Profile() {
	const [state] = useAppContext()
	const pokemon = state.profile.pokemon

	if (!pokemon) {
		return <Typography>No hay información del Pokémon disponible.</Typography>
	}


	return (
		<Card>
			<CardContent>
				<Typography variant="h5">Tú Pokémon es: {pokemon.name}</Typography>
				<Stack direction="row" spacing={1}>
					{pokemon.types.map((type, index) => (
						<Chip key={index} label={type} />
					))}
				</Stack>
			</CardContent>
		</Card>
	)
}
