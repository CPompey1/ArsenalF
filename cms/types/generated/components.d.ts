import type { Schema, Struct } from '@strapi/strapi';

export interface AboutMeExperienceBlock extends Struct.ComponentSchema {
  collectionName: 'components_about_me_experience_blocks';
  info: {
    description: '';
    displayName: 'ExperienceBlock';
    icon: 'cast';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutMeProfileIntroduciton extends Struct.ComponentSchema {
  collectionName: 'components_about_me_profile_introducitons';
  info: {
    description: '';
    displayName: 'Introduction';
    icon: 'user';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    name: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface NavigationNavigationBar extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_bars';
  info: {
    description: '';
    displayName: 'NavigationBar';
    icon: 'cursor';
  };
  attributes: {
    buttons: Schema.Attribute.JSON;
    collapsableButtons: Schema.Attribute.JSON;
    collapsableButtonsNames: Schema.Attribute.JSON;
  };
}

export interface NavigationNavigationBarButton extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_bar_buttons';
  info: {
    description: '';
    displayName: 'NavigationBarButton';
  };
  attributes: {
    buttonInfo: Schema.Attribute.JSON;
  };
}

export interface NavigationNavigationSlider extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_sliders';
  info: {
    displayName: 'NavigationSlider';
    icon: 'bulletList';
  };
  attributes: {
    buttons: Schema.Attribute.JSON;
  };
}

export interface SpreadingInformationBlog extends Struct.ComponentSchema {
  collectionName: 'components_spreading_information_blogs';
  info: {
    displayName: 'Blog';
    icon: 'discuss';
  };
  attributes: {
    information: Schema.Attribute.Blocks;
    sampleImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-me.experience-block': AboutMeExperienceBlock;
      'about-me.profile-introduciton': AboutMeProfileIntroduciton;
      'navigation.navigation-bar': NavigationNavigationBar;
      'navigation.navigation-bar-button': NavigationNavigationBarButton;
      'navigation.navigation-slider': NavigationNavigationSlider;
      'spreading-information.blog': SpreadingInformationBlog;
    }
  }
}
