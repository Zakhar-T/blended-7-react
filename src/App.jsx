import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';

import blogCardData from './data/article.json';
import forbesData from './data/forbes.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={blogCardData.poster}
          tag={blogCardData.tag}
          title={blogCardData.title}
          description={blogCardData.description}
          name={blogCardData.name}
          avatar={blogCardData.avatar}
          postedAt={blogCardData.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbesData} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
};
