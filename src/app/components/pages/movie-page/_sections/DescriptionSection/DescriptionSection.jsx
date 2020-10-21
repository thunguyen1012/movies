import React from 'react';
import PT from 'prop-types';

import { withMovieCardContext } from 'app_hocs';
import { Title, Tags, Rating } from 'app_components/pages/movie-page/_blocks';
import { Row, Column } from 'app_components/layout';

function DescriptionSection({ cls_base, context }) {
  const { movie } = context;
  const { title, production_countries, genres, release_date, runtime, vote_average, overview } = movie;

  return (
    <section className="mb-3">
      <Row>
        <Column size={9} cls="p-0">
          <Title
            cls={cls_base}
            data={{ title, release_date }}
          />
          <Tags
            cls={`${cls_base}-top`}
            data={{ production_countries, genres, runtime }}
          />
        </Column>

        <Column size={3} cls="p-0">
          <Rating
            cls={`${cls_base}-rating`}
            data={{ vote_average }}
          />
        </Column>
      </Row>

      <Row>
        {overview}
      </Row>
    </section>
  );
};

DescriptionSection.propTypes = {
  cls_base: PT.string.isRequired,

  context: PT.shape({
    movie: PT.shape({
      title: PT.string,
      production_countries: PT.array,
      genres: PT.array,
      release_date: PT.string,
      runtime: PT.number,
      vote_average: PT.number,
      overview: PT.string
    }).isRequired
  }).isRequired
};

export default withMovieCardContext(DescriptionSection);