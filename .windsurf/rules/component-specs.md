# Component Specifications

## Core Components

### Feed Component
**Props**:
```typescript
interface FeedProps {
  cards: Card[];
  initialFilter?: string;
  initialSort?: 'newest' | 'oldest' | 'custom';
}
```

### FilterSidebar Component
**Props**:
```typescript
interface FilterSidebarProps {
  categories: string[];
  activeCategory: string;
  activeSort: 'newest' | 'oldest' | 'custom';
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}
```

### CustomPostCard Component
**Props**:
```typescript
interface CustomPostCardProps {
  id: string;
  category: string;
  createdAt: string;
  background?: {
    type: 'image' | 'color';
    value: string;
  };
  blocks: ContentBlock[];
  collapsedBlocks?: string[];
}

type ContentBlock = 
  | TitleBlock
  | BodyBlock
  | PhotoBlock
  | GalleryBlock
  | TrackBlock
  | AlbumBlock;
```

### EventCard Component
**Props**:
```typescript
interface EventCardProps {
  id: string;
  category: string;
  createdAt: string;
  events: Event[];
}

interface Event {
  name: string;
  date: Date;
  time: string;
  venue: string;
  location: string;
  image?: string;
  ticketLink?: string;
  isPast: boolean;
}
```

### MusicPlayer Component
**Props**:
```typescript
interface MusicPlayerProps {
  currentTrack?: Track;
  onTrackEnd?: () => void;
}

interface Track {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  artwork?: string;
}
```

## Sanity Schemas

### Shared Block Types

#### Event Block (reusable)
```typescript
{
  name: 'eventBlock',
  type: 'object',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'date', type: 'datetime' },
    { name: 'time', type: 'string' },
    { name: 'venue', type: 'string' },
    { name: 'location', type: 'string' },
    { name: 'image', type: 'image' },
    { name: 'ticketLink', type: 'url' }
  ]
}
```

#### Track Block (reusable)
```typescript
{
  name: 'trackBlock',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'artwork', type: 'image' },
    { name: 'audioFile', type: 'file' },
    {
      name: 'streamingLinks',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', type: 'string' },
          { name: 'url', type: 'url' }
        ]
      }]
    }
  ]
}
```

### Custom Post Schema
```typescript
{
  name: 'customPost',
  type: 'document',
  fields: [
    {
      name: 'category',
      type: 'string',
      options: {
        list: ['Events', 'Music', 'Photos', 'Updates', 'General']
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'background',
      type: 'object',
      fields: [
        {
          name: 'type',
          type: 'string',
          options: { list: ['none', 'image', 'color'] }
        },
        {
          name: 'image',
          type: 'image',
          hidden: ({parent}) => parent?.type !== 'image'
        },
        {
          name: 'color',
          type: 'color',
          hidden: ({parent}) => parent?.type !== 'color'
        }
      ]
    },
    {
      name: 'blocks',
      type: 'array',
      of: [
        { type: 'titleBlock' },
        { type: 'bodyBlock' },
        { type: 'photoBlock' },
        { type: 'galleryBlock' },
        { type: 'trackBlock' },
        { type: 'albumBlock' },
        { type: 'eventBlock' }
      ]
    },
    {
      name: 'collapsedBlocks',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'block' }] }],
      description: 'Blocks visible in collapsed view'
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ]
}
```
