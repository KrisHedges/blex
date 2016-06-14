define('ember-frontend/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ember-frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-frontend/tests/components/menu-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/menu-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/menu-bar.js should pass jshint.');
  });
});
define('ember-frontend/tests/components/show-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/show-post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/show-post.js should pass jshint.');
  });
});
define('ember-frontend/tests/controllers/posts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/posts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/posts.js should pass jshint.');
  });
});
define('ember-frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-frontend/tests/helpers/start-app', 'ember-frontend/tests/helpers/destroy-app'], function (exports, _qunit, _emberFrontendTestsHelpersStartApp, _emberFrontendTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberFrontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberFrontendTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-frontend/tests/helpers/resolver', ['exports', 'ember-frontend/resolver', 'ember-frontend/config/environment'], function (exports, _emberFrontendResolver, _emberFrontendConfigEnvironment) {

  var resolver = _emberFrontendResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberFrontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberFrontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-frontend/tests/helpers/start-app', ['exports', 'ember', 'ember-frontend/app', 'ember-frontend/config/environment'], function (exports, _ember, _emberFrontendApp, _emberFrontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberFrontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberFrontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-frontend/tests/mixins/pages.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/pages.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/pages.js should pass jshint.');
  });
});
define('ember-frontend/tests/models/category.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/category.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/category.js should pass jshint.');
  });
});
define('ember-frontend/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass jshint.');
  });
});
define('ember-frontend/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-frontend/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('ember-frontend/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('ember-frontend/tests/routes/posts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts.js should pass jshint.');
  });
});
define('ember-frontend/tests/routes/show.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/show.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/show.js should pass jshint.');
  });
});
define('ember-frontend/tests/test-helper', ['exports', 'ember-frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberFrontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberFrontendTestsHelpersResolver['default']);
});
define('ember-frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-frontend/tests/unit/models/category-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('category', 'Unit | Model | category', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-frontend/tests/unit/models/category-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/category-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/category-test.js should pass jshint.');
  });
});
define('ember-frontend/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-frontend/tests/unit/models/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/post-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
define('ember-frontend/tests/unit/routes/posts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:posts', 'Unit | Route | posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-frontend/tests/unit/routes/posts-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/posts-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/posts-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map