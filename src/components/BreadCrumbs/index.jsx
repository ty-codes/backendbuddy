import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'assets/svg';
import { BreadCrumbsWrapper } from './BreadCrumbs.style';

const BreadCrumbs = ({ items = [] }) => {
  return (
    <BreadCrumbsWrapper>
      <ol>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              <li>
                {isLastItem ? (
                  item.title
                ) : (
                  <NavLink to={item.url}>{item.title}</NavLink>
                )}
              </li>

              {!isLastItem && <ArrowRight className="breadcrumb-separator" />}
            </React.Fragment>
          );
        })}
      </ol>
    </BreadCrumbsWrapper>
  );
};

export default BreadCrumbs;
