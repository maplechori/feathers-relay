import React from 'react'
import Relay from 'react-relay'

const ViewerQueries = {
          viewer: (Component) => Relay.QL`
              query {
                  viewer {
                      ${Component.getFragment('viewer')}
                  }
              }
            `,
          }

export default ViewerQueries;
