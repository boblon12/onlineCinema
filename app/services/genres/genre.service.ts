import { axiosClassic } from 'api/interseptors';

import { IGenre } from '@/shared/types/movies.types';

import { getGenresUrl } from '@/configs/api.config';

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		});
	},
};