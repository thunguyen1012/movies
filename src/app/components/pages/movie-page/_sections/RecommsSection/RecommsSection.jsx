import './RecommsSection.scss';

import React from 'react';
import PT from 'prop-types';
import b_ from 'b_';
import cn from 'classnames';

import PTS from 'app_services/PropTypesService';
import { withTranslation } from 'react-i18next';
import { isNotEmpty } from 'app_services/UtilsService';
import { Message } from 'app_components/layout';
import { ListBlock } from
  'app_components/pages/movies-page/_blocks';

function RecommsSection({ t, data_moviesList }) {
  const cls_base = 'movies-list';
  const b = b_.with(cls_base);

  const { error, movies } = data_moviesList;
  const hasMovies = isNotEmpty(movies);

  return (
    <>
      {error && <p>{error}</p>}

      {hasMovies && (
        <div className={cn(b(), 'mt-3')}>
          <Message>
            <h2 className="mb-0">
              {t('movie_details.recommendations.section_label')}
              {':'}
            </h2>
          </Message>

          <ListBlock
            cls_base={cls_base}
            movies={movies}
          />
        </div>
      )}
    </>
  );
}

RecommsSection.propTypes = {
  t: PT.func.isRequired,

  data_moviesList: PT.shape({
    error: PTS.nullOrString,
    movies: PT.array.isRequired
  }).isRequired,
};

export default withTranslation()(RecommsSection);