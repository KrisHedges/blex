define('ember-admin/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('ember-admin/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ember-admin/tests/components/category-select.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/category-select.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/category-select.js should pass jshint.');
  });
});
define('ember-admin/tests/components/file-browser.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/file-browser.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/file-browser.js should pass jshint.');
  });
});
define('ember-admin/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('ember-admin/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('ember-admin/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ember-admin/tests/helpers/flash-message', ['exports', 'ember', 'ember-cli-flash/flash/object'], function (exports, _ember, _emberCliFlashFlashObject) {
  var K = _ember['default'].K;

  _emberCliFlashFlashObject['default'].reopen({ init: K });
});
define('ember-admin/tests/helpers/flash-message.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/flash-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass jshint.');
  });
});
define('ember-admin/tests/helpers/include.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/include.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/include.js should pass jshint.');
  });
});
define('ember-admin/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-admin/tests/helpers/start-app', 'ember-admin/tests/helpers/destroy-app'], function (exports, _qunit, _emberAdminTestsHelpersStartApp, _emberAdminTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberAdminTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _emberAdminTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('ember-admin/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ember-admin/tests/helpers/resolver', ['exports', 'ember-admin/resolver', 'ember-admin/config/environment'], function (exports, _emberAdminResolver, _emberAdminConfigEnvironment) {

  var resolver = _emberAdminResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberAdminConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberAdminConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ember-admin/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ember-admin/tests/helpers/start-app', ['exports', 'ember', 'ember-admin/app', 'ember-admin/config/environment'], function (exports, _ember, _emberAdminApp, _emberAdminConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberAdminConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberAdminApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ember-admin/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ember-admin/tests/mixins/authorization.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/authorization.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/authorization.js should pass jshint.');
  });
});
define('ember-admin/tests/mixins/treeify.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - mixins/treeify.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/treeify.js should pass jshint.');
  });
});
define('ember-admin/tests/models/category.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/category.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/category.js should pass jshint.');
  });
});
define('ember-admin/tests/models/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/edit.js should pass jshint.');
  });
});
define('ember-admin/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass jshint.');
  });
});
define('ember-admin/tests/models/upload.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/upload.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/upload.js should pass jshint.');
  });
});
define('ember-admin/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('ember-admin/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ember-admin/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/categories/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/categories/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/categories/edit.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/categories/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/categories/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/categories/new.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/categories.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/categories.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/categories.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/posts/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts/edit.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/posts/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts/new.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/posts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/posts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/posts.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/uploads/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/uploads/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/uploads/index.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/uploads.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/uploads.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/uploads.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/users/change-password.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/users/change-password.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/change-password.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/users/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/users/edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/edit.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/users/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/users/new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users/new.js should pass jshint.');
  });
});
define('ember-admin/tests/routes/users.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/users.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users.js should pass jshint.');
  });
});
define('ember-admin/tests/serializers/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/post.js should pass jshint.');
  });
});
define('ember-admin/tests/serializers/upload.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - serializers/upload.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/upload.js should pass jshint.');
  });
});
define('ember-admin/tests/services/session.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/session.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/session.js should pass jshint.');
  });
});
define('ember-admin/tests/test-helper', ['exports', 'ember-admin/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberAdminTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberAdminTestsHelpersResolver['default']);
});
define('ember-admin/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/mixins/authorization-test', ['exports', 'ember', 'ember-admin/mixins/authorization', 'qunit'], function (exports, _ember, _emberAdminMixinsAuthorization, _qunit) {

  (0, _qunit.module)('Unit | Mixin | authorization');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var AuthorizationObject = _ember['default'].Object.extend(_emberAdminMixinsAuthorization['default']);
    var subject = AuthorizationObject.create();
    assert.ok(subject);
  });
});
define('ember-admin/tests/unit/mixins/authorization-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/mixins/authorization-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/authorization-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/models/category-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('category', 'Unit | Model | category', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    //let model = this.subject();
    // let store = this.store();
    assert.ok(true);
  });
});
define('ember-admin/tests/unit/models/category-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/category-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/category-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    //let model = this.subject();
    // let store = this.store();
    assert.ok(true);
  });
});
define('ember-admin/tests/unit/models/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/post-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    // let model = this.subject();
    // let store = this.store();
    assert.ok(true);
  });
});
define('ember-admin/tests/unit/models/user-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/routes/categories/edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:categories/edit', 'Unit | Route | categories/edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-admin/tests/unit/routes/categories/edit-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/categories/edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/categories/edit-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/routes/categories/new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:categories/new', 'Unit | Route | categories/new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-admin/tests/unit/routes/categories/new-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/categories/new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/categories/new-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/routes/categories-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:categories', 'Unit | Route | categories', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-admin/tests/unit/routes/categories-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/categories-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/categories-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-admin/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/routes/login-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:login', 'Unit | Route | login', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-admin/tests/unit/routes/login-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/login-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/routes/posts-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:posts', 'Unit | Route | posts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-admin/tests/unit/routes/posts-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/posts-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/posts-test.js should pass jshint.');
  });
});
define('ember-admin/tests/unit/routes/users-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-admin/tests/unit/routes/users-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/users-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ember-admin/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map