import { Platform, StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    paddingBottom: 16
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
    paddingBottom: 32
  },
  headerText: {
    marginTop: 24,
    fontSize: 34,
    lineHeight: 41,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-bold'
      },
      ios: {
        fontWeight: '700',
        letterSpacing: 0.41
      }
    })
  },
  sectionText: {
    marginTop: 32,
    color: '#222',
    fontSize: 22,
    lineHeight: 28,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      ios: {
        fontWeight: '600',
        letterSpacing: 0.75
      }
    })
  },
  componentText: {
    marginTop: 16,
    color: '#222',
    fontSize: 16,
    lineHeight: 21,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium'
      },
      ios: {
        fontWeight: '600',
        letterSpacing: -0.408
      }
    })
  },
  colorPreview: {
    marginLeft: 12,
    marginTop: 12,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 3,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.25
  },
  gradient: {
    alignSelf: 'stretch',
    marginLeft: 12,
    marginTop: 12,
    marginBottom: 16,
    height: 4
  },
  sliderRow: {
    alignSelf: 'stretch',
    marginLeft: 12,
    marginTop: 12
  },
  colorString: {
    fontSize: 34,
    lineHeight: 41,
    ...Platform.select({
      android: {
        fontFamily: 'monospace'
      },
      ios: {
        fontFamily: 'Courier New',
        fontWeight: '600',
        letterSpacing: 0.75
      }
    })
  }
});